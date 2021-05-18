import React, { useEffect } from "react";
import c3 from 'c3';

const BarGraph = ()=>{
    useEffect(()=>{
        c3.generate({
            bindto: "#bar",
            data: {
              columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 50, 20, 10, 40, 15, 25],
              ],
              type: "bar",
            },
          });
        }, []
    );
    
    return (<div>
        <div id="bar"/>
    </div>);
}

export default BarGraph;