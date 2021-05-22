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
        res.json(user);
    } catch (error) {
        
    }
});

module.exports = router;