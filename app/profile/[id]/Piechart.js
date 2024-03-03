"use client";
import React from 'react';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
    // Data for the line chart
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Depression',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
        {
          label: 'Anxiety',
          data: [35, 45, 60, 70, 45, 40, 30],
          fill: false,
          borderColor: 'rgb(255, 99, 132)',
          tension: 0.1,
        },
        {
          label: 'ADHD',
          data: [20, 30, 40, 50, 35, 25, 20],
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
