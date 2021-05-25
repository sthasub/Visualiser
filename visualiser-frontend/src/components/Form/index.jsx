import React, { useState } from "react";
import "./style.css";
const Form = ({ submitForm }) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [region, setRegion] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  const allValue = {
    firstname: firstname,
    lastname: lastname,
    gender: gender,
    dob: dob,
    region: region,
    diagnosis: diagnosis,
  };
  
  return (
    <div id="forms">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm(allValue);
          setFirstName("");
          setLastName("");
          setDiagnosis("");
          setDob("");
          setGender("");
          setRegion("");
        }}
      >
        <h1>Patient Form</h1>
        <small id="required" className="form-text text-muted">
          Every fields is *Required
        </small>
        <div className="form-group">
          <label htmlFor="patientFirstName">First Name</label>
          <input
            type="text"
            autoComplete="off"
            className="form-control"
            id="patientFirstName"
            aria-describedby="patientFirstName"
            placeholder="Enter First Name"
            value={firstname}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="patientLastName">Last Name</label>
          <input
            type="text"
            autoComplete="off"
            className="form-control"
            id="patientLastName"
            aria-describedby="patientLastName"
            placeholder="Enter Last Name"
            value={lastname}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="text"
            autoComplete="off"
            className="form-control"
            id="dob"
            aria-describedby="dob"
            placeholder="Enter date as dd/MM/yyyy"
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            value="Male"
            id="flexRadioDefault1"
            onChange={(e) => {
              e.target.checked ? setGender(e.target.value) : setGender("Male");
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            value="Female"
            id="flexRadioDefault2"
            onChange={(e) => {
              e.target.checked
                ? setGender(e.target.value)
                : setGender("Female ");
            }}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            autoComplete="off"
            className="form-control"
            id="state"
            aria-describedby="state"
            placeholder="Enter State"
            value={region}
            onChange={(e) => {
              setRegion(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="diagnosis" id="da">
            Diagnosis
          </label>
          <input
            type="text"
            autoComplete="off"
            className="form-control"
            id="diagnosis"
            aria-describedby="diagnosis"
            placeholder="Enter Diagnosis"
            value={diagnosis}
            onChange={(e) => {
              setDiagnosis(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
