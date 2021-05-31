const router = require("express").Router();
const withAuth = require("../middleware/withAuth");
const bcrypt = require("bcryptjs");
const { User, Disease, Patient } = require("../models");

router.get("/", async (req, res) => {
    try {
        let user = await User.find({}).populate(
            {
                path: "diseases",
                model: "Disease",
                populate: {
                    path: "patients",
                    model: "Patient"
                }
            }
        );
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json(error);
    }
});

router.get("/userData", withAuth, async (req, res) => {
    const getUserName = await User.findOne({"tokens.token":req.token});
    res.json({name:getUserName.username, token:req.token});
})

router.get("/logout", (req, res)=>{
    res.clearCookie("visualiserToken", {path:"/"});
    res.status(200).json("logout success!");
})

router.put("/patient/:token",  async (req, res) => {
    try {
        const checkToken = await User.findOne({"tokens.token":req.params.token});
        const patient = await Patient.create({
            name: req.body.firstname + " " + req.body.lastname,
            birthYear: req.body.dob,
            gender: req.body.gender,
            state: req.body.region
        });

        const diagnosis = await Disease.findOneAndUpdate(
            { name: req.body.diagnosis.toLowerCase() },
            { $push: { patients: patient._id } },
            { upsert: true, new: true });

        const user = await User.findOneAndUpdate(
            {
                _id:checkToken._id
            }, { $push: { diseases: diagnosis._id } },
            { upsert: true, new: true }
        );
        res.status(200).send({ success: "data saved" });
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
});

router.post("/signup", async (req, res) => {
        
    try {
        const userCheck = await User.findOne({ staffId: req.body.staffId });
        if (userCheck) {
            return res.status(422).json({ error: "all ready exist" });
        }
        const user = await User.create({
            username: req.body.firstname + " " + req.body.lastname,
            staffId: req.body.staffId,
            email: req.body.email,
            password: req.body.password,
            cpassword: req.body.cpassword
        });
        res.status(201).json({ success: "data saved" });
    } catch (error) {
        res.status(500).json(error)
    }
});

router.post("/login", async (req, res) => {

    try {

        const userLogin = await User.findOne({ staffId: req.body.staffId });

        if (userLogin) {
            const isMatch = await bcrypt.compare(req.body.password, userLogin.password);
            const token = await userLogin.generateToken();
            res.cookie("visualiserToken", token, {
                expires: new Date(Date.now() + (60 * 1000 * 60 * 12)),
                secure:true,
                httpOnly: true,
            })
            if (!isMatch) {
                return res.status(400).json({ msg: "invalid credential " });
            } else {
                res.status(201).json({ message: "login successful", token:token });
            }
        } else {
            return res.status(400).json({ msg: "invalid credential" });
        }

    } catch (error) {
          console.log(error);  
    }
});

module.exports = router;