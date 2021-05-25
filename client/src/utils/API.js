import axios from "axios";

export default {
    getData:function(){
        return axios.get("/user");
    },
    getDiagnosis:function(){
        return axios.get("/diagnosis");
    },
    savePatientInfo:function(patientData){
        return axios.post("/user", patientData);
    }
};