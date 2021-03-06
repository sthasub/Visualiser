const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: { type: String, required: true },
  birthYear: { type: String, required: true },
  gender: { type: String, required: true },
  state: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;


// { type : Array , "default" : [] } array storage