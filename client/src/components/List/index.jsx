import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../../utils/API";
const List = ({ handler }) => {
  const [diseaseName, setDiseaseName] = useState([]);

  const getDisease = (disease) => {
    let putArray = [];
    disease.map((disease) => putArray.push(disease.name));
    return putArray;
  };

  useEffect(() => {
    API.getDiagnosis()
      .then((res) => {
        setDiseaseName(getDisease(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <h4>List of diagnosis</h4>
      </div>
      {diseaseName.map((d, index) => (
        <div
          className="bg-light my-2"
          title="click to see the data"
          id="list"
          key={index}
          onClick={() => handler(d)}
        >
          {d.toUpperCase()}
        </div>
      ))}
    </>
  );
};

export default List;
