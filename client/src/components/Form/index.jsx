import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "./style.css";

const Form = ({ submitForm, formType }) => {
  // common states
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  // Patient States
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState(new Date());
  const [region, setRegion] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  // Staff States
  const [staffId, setStaffId] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const validate = () => {
    setErrorEmail("");

    if (email.includes("@") && email.includes(".")){ 
      return true;}
    else{ 
      return false;
    }
  };

  const inputHandler = (args) => {
    switch (args) {
      case "firstname":
        return (e) => {
          e.preventDefault();
          setFirstName(e.target.value);
        };
      case "lastname":
        return (e) => {
          e.preventDefault();
          setLastName(e.target.value);
        };
      case "region":
        return (e) => {
          e.preventDefault();
          setRegion(e.target.value);
        };
      case "diagnosis":
        return (e) => {
          e.preventDefault();
          setDiagnosis(e.target.value);
        };
      case "password":
        return (e) => {
          e.preventDefault();
          setPassword(e.target.value);
        };
      case "email":
        return (e) => {
          e.preventDefault();
          setEmail(e.target.value);
        };
      case "staffId":
        return (e) => {
          e.preventDefault();
          setStaffId(e.target.value);
        };
    }
  };

  const isPatientFormFilled =
    firstname.length > 0 &&
    lastname.length > 0 &&
    region.length > 0 &&
    diagnosis.length > 0;

  const isLoginFormFilled = staffId.length > 0 && password.length > 0;
  const isSignupFormFilled =
    password.length > 0 &&
    firstname.length > 0 &&
    staffId.length > 0 &&
    cpassword.length > 0 &&
    email.length > 0 &&
    lastname.length > 0;

  const getData = () => {
    if (dob) {
      const d = new Date(Date.parse(dob));
      return d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    }
  };

  if (formType === "addPatient") {
    const allValue = {
      firstname: firstname,
      lastname: lastname,
      gender: gender,
      dob: getData(),
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
            setDob("");
          }}
        >
          <h1>Patient Form</h1>
          <small id="required" className="form-text text-muted">
            Every field is *Required
          </small>
          <div className="form-group">
            <label htmlFor="patientFirstName">First Name</label>
            <input
              type="text"
              autoComplete="off"
              className="form-control rounded-0"
              id="patientFirstName"
              aria-describedby="patientFirstName"
              placeholder="Enter First Name"
              value={firstname}
              onChange={inputHandler("firstname")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="patientLastName">Last Name</label>
            <input
              type="text"
              autoComplete="off"
              className="form-control rounded-0"
              id="patientLastName"
              aria-describedby="patientLastName"
              placeholder="Enter Last Name"
              value={lastname}
              onChange={inputHandler("lastname")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <br />
            <DatePicker
              selected={dob}
              onChange={(date) => setDob(date)}
              isClearable
              dateFormat="dd/MM/yyyy"
              className="datePicker"
              placeholderText="click here"
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
                e.target.checked
                  ? setGender(e.target.value)
                  : setGender("Male");
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
                  : setGender("Female");
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
              className="form-control rounded-0"
              id="state"
              aria-describedby="state"
              placeholder="Enter State"
              value={region}
              onChange={inputHandler("region")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="diagnosis" id="da">
              Diagnosis
            </label>
            <input
              type="text"
              autoComplete="off"
              className="form-control rounded-0"
              id="diagnosis"
              aria-describedby="diagnosis"
              placeholder="Enter Diagnosis"
              value={diagnosis}
              onChange={inputHandler("diagnosis")}
            />
          </div>
          <button
            type="submit"
            disabled={!isPatientFormFilled}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  } else if (formType === "login") {
    const userLoginObj = {
      staffId: staffId,
      password: password,
    };
    return (
      <div id="forms">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitForm(userLoginObj);
            setPassword("");
            setStaffId("");
          }}
        >
          <h1>Sign In</h1>
          <small id="required" className="form-text text-muted">
            Every field is *Required
          </small>
          <div className="form-group">
            <label htmlFor="staffId" id="da">
              Staff Id
            </label>
            <input
              type="text"
              autoComplete="off"
              className="form-control rounded-0"
              id="staffId"
              aria-describedby="staffId"
              placeholder="Enter staff id"
              value={staffId}
              onChange={inputHandler("staffId")}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              autoComplete="off"
              className="form-control rounded-0"
              id="password"
              aria-describedby="password"
              placeholder="Enter password"
              value={password}
              onChange={inputHandler("password")}
            />
          </div>
          <button
            type="submit"
            disabled={!isLoginFormFilled}
            className="btn btn-primary"
          >
            Sign In
          </button>
        </form>
      </div>
    );
  } else {
    const userObj = {
      firstname: firstname,
      lastname: lastname,
      staffId: staffId,
      password: password,
      cpassword: cpassword,
      email: email,
    };
    return (
      <div id="forms">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (validate()) {
              submitForm(userObj);
            } else {
              setErrorEmail("Please enter valid email");
            }
            setFirstName("");
            setLastName("");
            setEmail("");
            setCpassword("");
            setPassword("");
            setStaffId("");
          }}
        >
          <h1>Staff Registration</h1>
          <small id="required" className="form-text text-muted">
            Every field is *Required
          </small>
          <div className="form-group">
            <label htmlFor="patientFirstName">First Name</label>
            <input
              type="text"
              autoComplete="off"
              className="form-control rounded-0"
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
              className="form-control rounded-0"
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
            <label htmlFor="staffId" id="da">
              Staff Id
            </label>
            <input
              type="text"
              autoComplete="off"
              className="form-control rounded-0"
              id="staffId"
              aria-describedby="staffId"
              placeholder="Enter staff id"
              value={staffId}
              onChange={(e) => {
                setStaffId(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              autoComplete="off"
              className="form-control rounded-0"
              id="email"
              aria-describedby="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {errorEmail ? (
              <div style={{ color: "red" }}>{errorEmail}</div>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              autoComplete="off"
              className="form-control rounded-0"
              id="password"
              aria-describedby="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cpassword" id="da">
              Confrim Password
            </label>
            <input
              type="password"
              autoComplete="off"
              className="form-control rounded-0"
              id="cpassword"
              aria-describedby="cpassword"
              placeholder="Enter confirm password"
              value={cpassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            disabled={!isSignupFormFilled}
            className="btn btn-primary"
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
};

export default Form;
