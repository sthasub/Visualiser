import React from "react";
import Table from "./../components/Table";
import PieChart from "./../components/PieChart";
import LineGraph from "./../components/LineGraph";
import BarGraph from "./../components/BarGraph";
import Input from "./../components/Input";
const Dashboard = () => {
    return (<main className="container">
        <div className="row">
            <div className="col">
                <PieChart />
            </div>
            <div className="col">
                <BarGraph />
            </div>
        </div>
        <br/>
        <div className="row">
            <div className="col">
                <LineGraph />
            </div>
            <div className="col">
                <Table />
            </div>
        </div>
        <br/>
        <div className="row">
            <div className="col-12 mx-auto">
                <Input />
            </div>
        </div>
    </main>);
}

export default Dashboard;