import React, { useState } from "react";
import API from "../utils/API";
import Form from "./../components/Form";
const Registration = () => {
  const [value, setValue] = useState([]);
  const submitForm = (val) => {
    API.savePatientInfo(val).then(res => {
      console.log("saved");
    }).catch(err => {
      console.log(err);
    })
    setValue(val);
  };  
  return (<div >
    <Form submitForm={submitForm} formType="registration"/>
    {
      value.length!== 0 ? <div>dedinef</div> : null
    }

  </div>);
}

export default Registration;