import axios from "axios";

export default {
    getData:function(){
        return axios.get("/user");
    }
};