import React, { useEffect } from "react";
import API from "../../utils/API";
import c3 from "c3";

const PieChart = ({diseaseName}) => {
  const males = ["male"];
  const females = ["female"];
  // const [Users, setUsers] = useState([]);

  function getGender(users) {
    // if (users.length === 0) return [[], []]; // loads the empty arrays
    const diseases = users[0].diseases.filter(
      (disease) => disease.name.toUpperCase() === diseaseName.toUpperCase()
    );
    let male = "";
    let female = "";
    diseases.map((d) => {
      male = d.patients.filter((p) => p.gender === "Male");
      female = d.patients.filter((p) => p.gender === "Female");
    });
    return [male, female];
  }

  useEffect(() => {
    API.getData()
      .then((res) => {
        // setUsers(res.data);
        let [male, female] = getGender(res.data);
        males.push(male.length);
        females.push(female.length);
        c3.generate({
          bindto: "#pie",
          data: {
            columns: [males, females],
            type: "pie",
          },
        });
        
      }
      )
      .catch((err) => console.log(err));
  }, [diseaseName]);

  return (
    <div>
      <div id="pie" />
    </div>
  );
};

export default PieChart;
