import React, { useContext, useState } from "react";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import Form from "../components/Form";
import { UserContext } from "../App";

const Login = () => {
    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();
    const [value, setValue] = useState([]);
    const submitForm = (val) => {
        API.signIn(val).then(res => {
            dispatch({ type: "USER", payload:res.data.token});
            localStorage.setItem("token", res.data.token);
            history.push("/");
        }).catch(err => {
            console.log(err);
            history.push("/login");
            window.alert("invlaid");
        })
        setValue(val);
    };
    return (<div >
        <Form submitForm={submitForm} formType="login" />
        {
            value.length !== 0 ? <div></div> : null
        }

    </div>);
}

export default Login;