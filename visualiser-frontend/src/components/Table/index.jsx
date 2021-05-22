import React from "react";
import "./style.css";
function Table({ patientData }) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Disease Name</th>
          <th scope="col">Patient Name</th>
          <th scope="col">State</th>
          <th scope="col">Gender</th>
          <th scope="col">Birth Year</th>
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
