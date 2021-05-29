const router = require("express").Router();
const { Patient } = require("../models");

router.get("/", async (req, res)=>{
    try {
        const patient = await Patient.find({});
        res.status(200).json(patient); 
    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;