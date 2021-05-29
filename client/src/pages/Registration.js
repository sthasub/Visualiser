import React, { useState } from "react";
import API from "../utils/API";
import Form from "./../components/Form";
import { useHistory } from "react-router-dom";


const Registration = () => {
  const history = useHistory();
  const [value, setValue] = useState("");
  const submitForm = (val) => {
    API.saveStaffInfo(val).then(res => {
      console.log("saved");
      setValue("");
      history.push("/login");
    }).catch(err => {
      if(err.response.status === 422){
        setValue("Already Exist");
        history.push("/registration");
      }
    })

  };
  return (<div >
    <Form submitForm={submitForm} formType="registration"/>
    {value?<div style={{color:"red", textAlign:"center"}}>
      User aleady Exist!
    </div>:null}

  </div>);
}

export default Registration;