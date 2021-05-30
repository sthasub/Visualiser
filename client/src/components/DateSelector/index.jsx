import react, { useEffect, useState } from "react";
import API from "../../utils/API";

const DateSelector = ({ dateHandler }) => {
  const [selectDate, setSelectDate] = useState([]);
  const [currentYear, setYear] = useState([]);
  const [todayDate, setTodayDate] = useState(Date.now());
  const entryDate = (patients) => {
    let dateArray = [];

    patients.map((patient) => {
      const date = new Date(patient.date);
      setYear(date.getFullYear());
      const getYear = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`;
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

  const getTodayDate = ()=>{
    const date = new Date(todayDate);
    return `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
  }


  return (
    <div>
      <h3>Current Year: {currentYear}</h3>
      <button
          type="button"
          className="btn btn-primary btn-sm"
          title="click to see the data"
          // id="list"
        >
          {getTodayDate()}
        </button>

    </div>
  );
};

export default DateSelector;
