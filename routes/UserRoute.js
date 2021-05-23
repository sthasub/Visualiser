const router = require("express").Router();
const {User} = require("../models");

router.get("/", async (req, res) => {
    try {
       let user = await User.find({}).populate(
        {
            path:"diseases",
            model:"Disease",
            populate:{
                path:"patients",
                model:"Patient"
            }
        }
    );
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json(error);
    }
});

module.exports = router;