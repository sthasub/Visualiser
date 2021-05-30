import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "react-datepicker/dist/react-datepicker.css";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AddPatientInfo from "./pages/AddPatientInfo";
import Registration from "./pages/Registration";
import {initialState, reducer} from "./reducer/UseReducer";

import 'c3/c3.css';
import Footer from "./components/Footer";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <UserContext.Provider value={{state, dispatch}}>
      <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/addInformation" component={AddPatientInfo}/>
        <Route exact path="/registration" component={Registration}/>
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </Router>
    </UserContext.Provider>
    </div>
    );
}

export default App;
