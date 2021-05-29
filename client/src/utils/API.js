import axios from "axios";

export default {
    getData:function(){
        return axios.get("/user");
    },
    getAddPatient:function(){
        return axios.get("/user/userData", { withCredentials: true } );
    },
    getPatientData:function(){
        return axios.get("/patient");
    },
    getDiagnosis:function(){
        return axios.get("/diagnosis");
    },
    savePatientInfo:function(patientData, userToken){
        return axios.put(`/user/patient/${userToken}`, patientData);
    },
    saveStaffInfo:function(staffData){
        return axios.post("/user/signup",staffData);
    },
    signIn:function(loginData){
        return axios.post("/user/login",loginData);
    },
    userDetail:function(){
        return axios.get("/user/userData");
    },
    signOut:function(){
        return axios.get("/user/logout");
    }
};