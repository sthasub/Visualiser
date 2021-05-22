import React from "react";
import TableContainer from "../components/TableContianer";
import PieChart from "./../components/PieChart";
import LineGraph from "./../components/LineGraph";
import BarGraph from "./../components/BarGraph";
import Input from "./../components/Input";
const Dashboard = () => {
    const bronchitis = () => "bronchitis";
    const diabetes = () => "diabetes";

    return (<main className="container">
        <div className="row">
            <div className="col">
                <PieChart diseaseName={diabetes} />
            </div>
            <div className="col">
                <BarGraph diseaseName={diabetes} />
            </div>
        </div>
        <br />
        <div className="row">
            <div className="col">
                <LineGraph diseaseName={diabetes} />
            </div>
        </div>
        <div className="row">
            <TableContainer />
        </div>
        <br />
        <div className="row">
            <div className="col-12 mx-auto">
                <Input />
            </div>
        </div>
    </main>);
}

export default Dashboard;