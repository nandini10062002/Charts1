import { useState } from "react";
import "./App.css";
import { UserData } from "./components/Data";
import PieChart from "./components/PieChart";
import StackedBarChart from './components/StackedBarChart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Common/Nav";
// import BasicTable from "./components/BasicTable";
import { FilteringTable } from "./components/FilteringTable";
// import {PaginationTable} from "./components/PaginationTable";


function App() {

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.empcode),
    datasets: [
      {
        label: "Features",
        data: UserData.map((data) => data.period),
        backgroundColor: ["red",
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <>
  
     <BrowserRouter>
     <NavBar />
     <Routes>
            <Route path="/" element={<PieChart />} />
            <Route path="/bar" element={<StackedBarChart />} />
          </Routes>
     </BrowserRouter>
      {/* <div style={{ width: 1200 }}>
        <BarChart chartData={userData} />
      </div>
      <div style={{width:'72rem',height:'80vh'}}>
        <PieChart/>
      </div> */}
      {/* <StackedBarChart/> */}
      {/* <Atharva/> */}
      <FilteringTable/>
      {/* <PaginationTable/> */}
    </>
  );
}

export default App;
