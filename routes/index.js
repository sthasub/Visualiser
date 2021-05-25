const router = require("express").Router();
const userRoute = require("./UserRoute");
const diagnosisRoute = require("./DiagnosisRoute");

router.use("/user",userRoute);
router.use("/diagnosis",diagnosisRoute);

module.exports = router;