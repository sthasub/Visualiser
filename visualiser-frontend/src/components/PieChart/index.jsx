import React,{ useEffect } from "react";
import c3 from "c3";

const PieChart = ()=>{
    useEffect(()=>{
        c3.generate({
            bindto: "#pie",
            data: {
              columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 50, 20, 10, 40, 15, 25],
              ],
              type: "pie",
            },
          });
        }, []
    );
    
    return (<div>
        <div id="pie"/>
    </div>);
}

export default PieChart;