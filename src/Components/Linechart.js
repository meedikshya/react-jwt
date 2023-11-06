import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

export const Linechart = ({chartData}) => {

    const options = {
        elements: {
          line: {
            tension: 0.5, // Adjust this value to control the curve of the line (0.0 for straight lines, 1.0 for very curved lines)
            borderColor: '#f46995', // Line color
            borderWidth: 2, // Line width
          },
        },
        scales: {
            x: {
            display: true, // show X-axis
            ticks: {
                color: 'white', // Change the color of the X-axis labels
              },
            },
            y: {
            display: false, // hide Y-axis
            },
          },
          plugins: {
            legend: {
              display: false, // Hide the legend (if you have one)
            },
          },
        };

        options.scales.x.grid = { display: false };
        options.scales.y.grid = { display: false };
      
  return <Line data={chartData} options={options} />
}
