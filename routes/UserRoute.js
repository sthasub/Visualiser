const router = require("express").Router();
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

router.post("/", async (req, res) => {
    console.log(req.body);
    try {
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
                name: "subhash",
                email: "subahs@email.com",
                password: "anything"
            }, { $push: { diseases: diagnosis._id } },
            { upsert: true, new: true }
        );
        console.log(user);
        res.status(200).send({success:"data saved"});
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
})


module.exports = router;