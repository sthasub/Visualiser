import React, { useEffect } from "react";
import c3 from 'c3';

const LineGraph = ()=>{
    useEffect(()=>{
        c3.generate({
            bindto: "#line",
            data: {
              columns: [
                ["data1", 30, 200, 100, 400, 150, 250],
                ["data2", 50, 20, 10, 40, 15, 25],
              ],
              type: "line",
            },
          });
        }, []
    );
    
    return (<div>
        <div id="line"/>
    </div>);
}

export default LineGraph;