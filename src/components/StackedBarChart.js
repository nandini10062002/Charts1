import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

const StackedBarChart = () => {
  const [data, setData] = useState({
    labels: ["User 1", "User 2", "User 3", "User 4"],
    datasets: [
      {
        label: "State 1",
        backgroundColor: "#FF6384",
        data: [4, 5, 4, 3,2],
      },
      {
        label: "State 2",
        backgroundColor: "#36A2EB",
        data: [2, 3, 2, 5,6],
      },
      {
        label: "State 3",
        backgroundColor: "#f3ba2f",
        data: [3, 2, 3, 7,2],
      },
      {
        label: "State 4",
        backgroundColor: "#2a71d0",
        data: [1, 6, 5, 2,1],
      }
    ],
  });

  const options = {
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  return (
    <div>
      <Bar data={data} width={100} height={50} options={options} />
    </div>
  );
};

export default StackedBarChart;
