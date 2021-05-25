import React from "react";
import "./style.css";
function Table({ patientData, sort }) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">
            <span onClick={() => sort("diseaseName")}>Disease Name</span>
          </th>
          <th scope="col">
            <span onClick={() => sort("patientName")}>Patient Name</span>
          </th>
          <th scope="col">
            <span onClick={() => sort("stateName")}>State</span>
          </th>
          <th scope="col">
            <span onClick={() => sort("gender")}>gender</span>
          </th>
          <th scope="col">
            <span onClick={() => sort("birthYear")}>Birth Year</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {patientData.map((patient, index) => (
          <tr key={index}>
            <td>{patient.diseaseName}</td>
            <td>{patient.patientName}</td>
            <td>{patient.stateName}</td>
            <td>{patient.gender}</td>
            <td>{patient.birthYear}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
