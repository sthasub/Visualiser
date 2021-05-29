 import React from "react";
// import TableContainer from "../components/TableContainer";
// import PieChart from "./../components/PieChart";
// import LineGraph from "./../components/LineGraph";
// import BarGraph from "./../components/BarGraph";
// import Input from "./../components/Input";
// import List from "../components/List";
import Main from "../components/Main";

const Dashboard = ()=>{
    return(<Main />);
}

export default Dashboard;


// const Dashboard = () => {
//     const [diseaseName, setdiseaseName] = useState("diabetes");
//     const handleNameChange = (name) => setdiseaseName(name);
    
//     return (
//         <main className="container">
//             <section className="row">
//                 <aside className="col" style={{ background: "skyblue" }}>
//                     <List handler={handleNameChange} />
//                 </aside>
//                 <section className="col-9" style={{ background: "wheat" }}>
//                     <div className="row">
//                         <PieChart diseaseName={diseaseName} />
//                         <div className="col">
//                             <BarGraph diseaseName={diseaseName} />
//                         </div>
//                     </div>
//                     <br />
//                     <div className="row">
//                         <div className="col">
//                             <LineGraph diseaseName={diseaseName} />
//                         </div>
//                     </div>
//                     <div className="row">
//                         <TableContainer />
//                     </div>
//                     <br />
//                     <div className="row">
//                         <div className="col-12 mx-auto">
//                             <Input />
//                         </div>
//                     </div>
//                 </section>
//             </section>
//         </main>
//     );
// }

// export default Dashboard;