const router = require("express").Router();
const userRoute = require("./UserRoute");
const patientRoute = require("./PatientRoute");
const diagnosisRoute = require("./DiagnosisRoute");

router.use("/user", userRoute);
router.use("/diagnosis", diagnosisRoute);
router.use("/patient", patientRoute);

module.exports = router;