"use client";
import React from 'react';
import 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  // Data for the pie chart
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
      {
        data: [300, 50, 100, 150],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0'
        ]
      }
    ]
  };

  return (
    <div  className=' w-[20dvw] h-[20dvw]'>
      
      <Pie  data={data}  />
    </div>
  );
};

export default PieChart;
