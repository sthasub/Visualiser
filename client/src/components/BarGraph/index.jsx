import React, { useEffect } from "react";
import API from "../../utils/API";
import c3 from "c3";

const BarGraph = ({diseaseName}) => {

  const vic = ["VIC"];
  const sa = ["SA"];
  const nt = ["NT"];
  const nsw = ["NSW"];
  const wa = ["WA"];

  function getGender(diagnosis) {

    const diseases = diagnosis.filter(
      (disease) => disease.name.toUpperCase() === diseaseName.toUpperCase()
    );


    let VIC = [];
    let SA = [];
    let NT = [];
    let NSW = [];
    let WA = [];
    diseases.map((d) => {
      VIC = d.patients.filter((p) => p.state === vic[0]);
      SA = d.patients.filter((p) => p.state === sa[0]);
      NT = d.patients.filter((p) => p.state === nt[0]);
      NSW = d.patients.filter((p) => p.state === nsw[0]);
      WA = d.patients.filter((p) => p.state === wa[0]);
    });

    return [VIC, SA, NT, NSW, WA];
  }

  useEffect(() => {
    API.getDiagnosis()
      .then((res) => {
        let [VIC, SA, NT, NSW, WA] = getGender(res.data);
        vic.push(VIC.length);
        sa.push(SA.length);
        nt.push(NT.length);
        nsw.push(NSW.length);
        wa.push(WA.length);
        return [vic, sa, nt, nsw, wa];
      })
      .then(([vic, sa, nt, nsw, wa]) => {
        c3.generate({
          bindto: "#bar",
          data: {
            columns: [vic, sa, nt, nsw, wa],
            type: "bar",
            labels: true,
          },
          axis: {
            x: {
              type: "category",
              categories: [""],
            },
          },
          bar: {
            space: 1.9,
            width: {
              ratio: 0.7
            },
          },
        });
      })
      .catch((err) => console.log(err));
  }, [diseaseName]);

  return (
    <div>
      <div id="bar" />
    </div>
  );
};

export default BarGraph;
