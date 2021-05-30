import React, { useContext, useState } from "react";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import Form from "../components/Form";
import { UserContext } from "../App";

const Login = () => {
    const { state, dispatch } = useContext(UserContext);
    const history = useHistory();
    const [value, setValue] = useState("");
    const submitForm = (val) => {
        API.signIn(val).then(res => {
            dispatch({ type: "USER", payload: res.data.token });
            localStorage.setItem("token", res.data.token);
            setValue("");
            history.push("/");
        }).catch(err => {
            if (err.response.status === 400) {
                setValue("Invalid");
                history.push("/login");
            }
        })
    };
    return (<div >
        <Form submitForm={submitForm} formType="login" />
        {value ? <h5 style={{ color: "red", textAlign: "center", marginTop:"10px" }}>
            Invalid credential! Please Sign in with valid id and password
    </h5> : null}
    </div>);
}

export default Login;