import React, { Component, useEffect, useState } from "react";
import API from "../../utils/API";
import "./style.css";
import Table from "../Table";

const Container = () => {
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(true);

  const formatAllData = (allData) => {
    const patientsData = creationOfNewObject(allData);
    return [].concat(...patientsData);
  };

  const creationOfNewObject = (allData) => {
    let pats = [];
    allData[0].diseases.map((d) => {
      pats.push(
        d.patients.map((p) => ({
          diseaseName: d.name,
          patientName: p.name,
          birthYear: dateFormatter(p.age),
          gender: p.gender,
          stateName: p.state,
        }))
      );
    });
    return pats;
  };

  const dateFormatter = (date) => {
    const d = new Date(Date.parse(date));
    return d.getFullYear().toString();
  };

  useEffect(() => {
    API.getData()
      .then((res) => {
        return formatAllData(res.data);
      })
      .then((formatedData) => {
        setPatients(formatedData);
      })
      .catch((err) => console.log(err));
  }, []);

  function searchName(rows) {
    return rows.filter((row) =>
      row.patientName.toLowerCase().includes(search.toLowerCase()) || 
      row.diseaseName.toLowerCase().includes(search.toLowerCase()) ||
      row.gender.toLowerCase().includes(search.toLowerCase()) ||
      row.stateName.toLowerCase().includes(search.toLowerCase()) ||
      row.birthYear.includes(search)
    );
  }

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Table patientData={searchName(patients)} />
    </div>
  );
};

export default Container;
