const router = require("express").Router();
const userRoute = require("./UserRoute");
const diseaseRoute = require("./DiseaseRoute");
const patientRoute = require("./PatientRoute");

router.use("/user",userRoute);
router.use("/disease",diseaseRoute);
router.use("/patient",patientRoute);

module.exports = router;