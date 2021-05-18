import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import Welcome from "./pages/Welcome";
import 'c3/c3.css';

function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Redirect to="/" />
      </Switch>
    </Router>
    );
}

export default App;
