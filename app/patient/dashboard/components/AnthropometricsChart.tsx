// import React, { useState, useEffect } from 'react';
// import { Scatter, Radar } from 'react-chartjs-2';

// // Sample data (replace with your data)
// const patientData = [
//     { id: 1, height: 170, weight: 65, bmi: 22.5 },
//     { id: 2, height: 180, weight: 70, bmi: 21.6 },
//     { id: 3, height: 165, weight: 58, bmi: 21.3 },
//     // ... more patients
// ];

// const AnthropometryChart = ({ type = 'scatter' }) => {
//     const [chartData, setChartData] = useState({});

//     useEffect(() => {
//         const labels = patientData.map((patient) => patient.id);

//         let datasets;
//         if (type === 'scatter') {
//             datasets = [
//                 {
//                     label: 'Height vs. Weight',
//                     data: patientData.map((patient) => ({ x: patient.height, y: patient.weight })),
//                     backgroundColor: 'rgba(255, 99, 132, 0.2)',
//                     borderColor: 'rgba(255, 99, 132, 1)',
//                     pointRadius: 5,
//                     pointHitRadius: 10,
//                 },
//             ];
//         } else {
//             datasets = [
//                 {
//                     label: 'Patient Measurements',
//                     data: patientData.map((patient) => ({
//                         height: patient.height,
//                         weight: patient.weight,
//                         bmi: patient.bmi,
//                     })),
//                     backgroundColor: 'rgba(54, 162, 235, 0.2)',
//                     borderColor: 'rgba(54, 162, 235, 1)',
//                     pointRadius: 5,
//                     pointHitRadius: 10,
//                     pointBackgroundColor: 'rgba(54, 162, 235, 1)',
//                     pointBorderColor: 'rgba(255, 255, 255, 1)',
//                 },
//             ];
//         }

//         setChartData({
//             labels,
//             datasets,
//         });
//     }, [type]);

//     const options = {
//         responsive: true,
//         maintainAspectRatio: false,
//         scales: {
//             yAxes: [
//                 {
//                     ticks: {
//                         beginAtZero: true,
//                     },
//                 },
//             ],
//         },
//     };

//     return (
//         <div>
//             <h2>Anthropometric Measurements ({type === 'scatter' ? 'Scatter' : 'Radar'} Chart)</h2>
//             {type === 'scatter' ? <Scatter data={chartData} options={options} /> : <Radar data={chartData} options={options} />}
//         </div>
//     );
// };

// export default AnthropometryChart;
"use client"
import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import DashboardCard from './DashboardCard';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);
// Sample data (replace with your data)
const patientData = [
    { id: 1, height: 170, weight: 65, bmi: 22.5 },
    { id: 2, height: 180, weight: 70, bmi: 21.6 },
    { id: 3, height: 165, weight: 58, bmi: 21.3 },
    // ... more patients
];
export const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

export const data = {
    datasets: [
        {
            label: 'Height vs. Weight',
            data: patientData.map((patient) => ({ x: patient.height, y: patient.weight })),
            backgroundColor: 'rgba(255, 99, 132, 1)',
        },
    ],
};

export default function AnthropometricsChart() {

    return (
        <DashboardCard title="Height vs. Weight" label="Anthropometric Measurements">
            <Scatter options={options} data={data} />
        </DashboardCard>
    );
}
