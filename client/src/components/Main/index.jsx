import React, { useState } from "react";
import TableContainer from "../TableContainer";
import PieChart from "../PieChart";
import LineGraph from "../LineGraph";
import BarGraph from "../BarGraph";
import List from "../List";
import "./style.css";
import DateSelector from "../DateSelector";

const Main = () => {
  const [diseaseName, setdiseaseName] = useState("diabetes");
  //  const [dateSelect, setDateSelect] = useState("");
  const handleNameChange = (name) => setdiseaseName(name);
  // const dateHandler = (date)=> setDateSelect(date);
  return (
    <main className="container">
      <section className="row">
        <aside className="col">
          <List handler={handleNameChange} />
        </aside>
        <section className="col-9">
        <DateSelector dateHandler={Date.now}/>
          <br />
          <h3> Percentage of male and female {diseaseName} patients</h3>
          <div className="row" id="pie">
            <PieChart diseaseName={diseaseName}/>
          </div>
          <br />
          <h3> Number of {diseaseName} patients in each state</h3>
          <div className="row" id="bar">
            <BarGraph diseaseName={diseaseName} />
          </div>
          <br />
          <h3> Number of {diseaseName} cases by patient birth year</h3>
          <div className="row" id="line">
            <LineGraph diseaseName={diseaseName} />
          </div>
          <br />
          <br />
          <h3> Patients general details</h3>
          <div className="row" id="table">
            <TableContainer />
          </div>
        </section>
      </section>
    </main>
  );
};

export default Main;
