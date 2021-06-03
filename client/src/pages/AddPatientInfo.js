import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Form from "./../components/Form";
import {useHistory} from "react-router-dom";
const AddPatientInfo = () => {
  const [value, setValue] = useState([]);
  const [data, setData] = useState({});
  const [diagnosis, setDiagnosis] = useState([]);
  const history = useHistory();
  
  const callAddPateintPage = async () => {
    try {
      const responseFromBackend = await API.getAddPatient();
      if(responseFromBackend.status !== 200) throw new Error("Not verfied");
      history.push("/addInformation");
    } catch (error) { 
        console.log(error.response.status, "HEY GO TO LOGIN");
        history.push("/login");
    }
  }

  useEffect(() => {
    callAddPateintPage();
    API.userDetail().then(res=>{
      setData(res.data.token);
    });
    API.getDiagnosis().then(res=>{
      const appendDiagnosis = [];
      res.data.map(ele=>appendDiagnosis.push(ele.name));
      setDiagnosis(appendDiagnosis);
    });
  },[]);

  const submitForm = (val) => {
    API.savePatientInfo(val, data).then(res => {
      console.log("saved");
    }).catch(err => {
      console.log(err);
    })
    setValue(val);
  };

  return (<div >
    <Form submitForm={submitForm} formType="addPatient" diagnosisArray={diagnosis}/>
    {
      value.length !== 0 ? <div></div> : null
    }
  </div>);
}

export default AddPatientInfo;