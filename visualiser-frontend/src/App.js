import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import $ from "jquery";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AddPatientInfo from "./pages/AddPatientInfo";
import 'c3/c3.css';

function App() {
  return (
    <div>
      <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/addInformation" component={AddPatientInfo}/>
        <Redirect to="/" />
      </Switch>
    </Router>
    
    </div>
    );
}

export default App;
