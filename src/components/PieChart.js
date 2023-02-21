import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, registerables,ArcElement } from "chart.js";
Chart.register(...registerables);
Chart.register(ArcElement);

const PieChart = () => {
  const [data, setData] = useState({
    labels: ["State 1", "State 2", "State 3", "State 4", "State 5", "State 6"],
    datasets: [
      {
        data: [5, 8, 4, 4, 8, 11],
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
        ],
        hoverBackgroundColor: [
          "rgb(255,255,255)",
          "rgb(255,255,255)",
          "rgb(255,255,255)",
          "rgb(255,255,255)",
          "rgb(255,255,255)",
          "rgb(255,255,255)",
        ],
      },
    ],
  });

  return (
    <div className="PieChart" style={{ height: "80vh" }}>
      <Pie data={data} options={{ maintainAspectRatio: true }} />
    </div>
  );
};

export default PieChart;
