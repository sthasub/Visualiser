import React, { useEffect } from "react";
import c3 from "c3";
import API from "../../utils/API";
const LineGraph = ({ diseaseName }) => {
  function getPatientInfoWithDisease(users) {
    const diseases = users[0].diseases.filter(
      (disease) => disease.name.toUpperCase() === diseaseName().toUpperCase()
    );
    let years = [];
    diseases.map((d) => {
      d.patients.map((p) => {
        let date = new Date(p.age);
        years.push(date.getFullYear().toString());
      });
    });

    let yearsObj = {};
    years.forEach((item) => {
      if (!yearsObj[item]) yearsObj[item] = 0;
      yearsObj[item] += 1;
    });

    let occurance = [];
    let distinctYear = [];
    for (const year in yearsObj) {
      occurance.push(yearsObj[year]);
      distinctYear.push(year);
    }
    return [distinctYear, occurance];
  }

  useEffect(() => {
    API.getData()
      .then((res) => {
        return getPatientInfoWithDisease(res.data);
      })
      .then(([years, occurance]) => {
        c3.generate({
          bindto: "#spline",
          data: {
            columns: [[`Number of ${diseaseName()} patients by birth year `].concat(occurance)],
            type: "spline",
          },
          axis: {
            x: {
              type: "category",
              categories: years,
              label: 'Years'
            },
            y:{
              label: 'Number of Patients'
            }
          },
        });
      });
  }, []);

  return (
    <div>
      <div id="spline" />
    </div>
  );
};

export default LineGraph;
