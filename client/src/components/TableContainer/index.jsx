import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import "./style.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
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
    allData.map((d) => {
      pats.push(
        d.patients.map((p) => ({
          diseaseName: d.name,
          patientName: p.name,
          birthYear: dateFormatter(p.birthYear),
          gender: p.gender,
          stateName: p.state,
        }))
      );
    });
    return pats;
  };

  function sorting(sortArg) {
    let sorted = "";
    if (sort) {
      sorted = patients.sort(function (item1, item2) {
        if (item1[sortArg] < item2[sortArg]) {
          return -1;
        }
        if (item1[sortArg] > item2[sortArg]) {
          return 1;
        }
        return 0;
      });
      setSort(false);
    } else {
      sorted = patients.sort(function (item1, item2) {
        if (item1[sortArg] < item2[sortArg]) {
          return 1;
        }
        if (item1[sortArg] > item2[sortArg]) {
          return -1;
        }
        return 0;
      });
      setSort(true);
    }
    setPatients([...sorted]);
  }

  const dateFormatter = (date) => {
    const getDate = date.split("/");
    const d = new Date(parseInt(getDate[2]),parseInt(getDate[1])-1,parseInt(getDate[0]));
    return d.getFullYear().toString();
  };

  useEffect(() => {
    API.getDiagnosis()
      .then((res) => {
        return formatAllData(res.data);
      })
      .then((formatedData) => {
        setPatients(formatedData);
      })
      .catch((err) => console.log(err));
  }, []);

  function searchName(rows) {
    return rows.filter(
      (row) =>
        row.patientName.toLowerCase().includes(search.toLowerCase()) ||
        row.diseaseName.toLowerCase().includes(search.toLowerCase()) ||
        row.gender.toLowerCase().includes(search.toLowerCase()) ||
        row.stateName.toLowerCase().includes(search.toLowerCase()) ||
        row.birthYear.includes(search)
    );
  }

  return (
    <div>
      <br/>
      
      <input
          id="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search here"
        />
        <FontAwesomeIcon icon={faSearch}/>
        <br/>
        <br/>
        <Table sort={sorting} patientData={searchName(patients)} />
    </div>
  );
};

export default Container;
