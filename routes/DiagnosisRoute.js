const router = require("express").Router();
const {Disease} = require("../models");

router.get("/",async (req,res)=>{
    try {
        const d = await Disease.find({}).populate(
            {
                path:"patients",
                model:"Patient"
            }
        );
        res.status(200).json(d);
    } catch (error) {
        res.status(404).json(error);
    }
});

module.exports = router;