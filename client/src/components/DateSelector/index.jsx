import react, { useEffect, useState } from "react";
import API from "../../utils/API";

const DateSelector = ({dateHandler}) => {
  
  const [selectDate, setSelectDate] = useState([]);
  const [currentYear, setYear] = useState([]);
  const entryDate = (patients) => {
    let dateArray = [];
    
    patients.map((patient) => {
      const date = new Date(patient.date);
      setYear(date.getFullYear());
      const getYear = `${date.getDate()}/${(date.getMonth()+1)}/${date.getFullYear()}`;
      dateArray.push(getYear.toString());
    });

    const distinctYear = dateArray.filter((year, index) => {
      return dateArray.indexOf(year) === index;
    });

    return distinctYear;
  };

  useEffect(() => {
    API.getPatientData()
      .then((res) => {
        setSelectDate(entryDate(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <div>
      <h3>Current Year: {currentYear}</h3>
      {selectDate.map((d, index) => (
         <button
          type="button"
          className="btn btn-primary btn-sm"
          title="click to see the data"
          // id="list"
          key={index}
          onClick={() => dateHandler(d)}
        >
          {d}
        </button>
      ))}
    </div>
  );
};

export default DateSelector;
