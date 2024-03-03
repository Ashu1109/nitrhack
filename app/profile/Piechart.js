"use client";
import React, { useEffect, useState } from 'react';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import axios from "axios"
const LineChart = ({ arr }) => {
  const [load, setLoad] = useState(0);
  const [labels, setLables] = useState(["jan","feb"])
  const [depression, setDepression] = useState([])
  const [anxiety, setAnxiety] = useState([])
  const [adhd, setAdhd] = useState([])

  useEffect(() => {
    ( async () => {
      try {
        const data = await axios.get("/api/getuser");
        let j = 1
        const data1 = []
        const data2 = []
        const data3 = []
        const data4 = []
        data.data.data.map((i) => {
          data1.push(j);
          j++;
          data2.push(i.depression);
          data3.push(i.anxiety);
          data4.push(i.adhd);
          if (j == data.data.data.length - 1) {
            setAnxiety(data3)
            setDepression(data2);
            setAdhd(data4);
            setLables(data1)
            setLoad(1)
          }
        })


        console.log(data2)
        console.log(arr, data)
      } catch (error) {
        console.log(error);
      }

    })();
  }, [])

  // Data for the line chart

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Depression',
        data: depression,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Anxiety',
        data: anxiety,
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
      {
        label: 'ADHD',
        data: adhd,
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1,
      },
    ],
  };

  // Options for the line chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Line Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};
export default LineChart;
