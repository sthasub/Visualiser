import React, { useEffect, useState } from "react";
import "./style.css";
import API from "../../utils/API"
const List = ({handler})=>{
    const [diseaseName, setDiseaseName] = useState([]);

    const getDisease = (disease)=>{
        let putArray = [];
        disease[0].diseases.map(
            (disease) => putArray.push(disease.name)
          );
        return putArray; 
    }

    useEffect(()=>{
        API.getData().then(res=>{
            setDiseaseName(getDisease(res.data));
            
        }).catch(err=>{
            console.log(err);
        })
    },[]);
    
    return (<>
        {diseaseName.map((d, index)=>
                       <div  className="bg-light my-2" id="list" key={index} onClick={()=>handler(d)}>{d.toUpperCase()}</div>
        )}
        
    </>);
}

export default List;
