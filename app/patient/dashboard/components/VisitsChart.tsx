"use client"
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import DashboardCard from './DashboardCard';
import { Chart } from 'chart.js';

export default function VisitsChart() {
    Chart.prototype.options
    // Sample data (replace with your actual data)
    const visitData = [
        { x: 'Monday', y: 10 },
        { x: 'Tuesday', y: 15 },
        { x: 'Wednesday', y: 8 },
        { x: 'Thursday', y: 12 },
        { x: 'Friday', y: 18 },
    ];

    const labels = visitData.map((item) => item.x); // Extract labels from data
    const [chartData, setChartData] = useState({
        data: {
            labels,
            datasets: [
                {
                    label: "Patient Visits",
                    backgroundColor: "#4a5568",
                    borderColor: "#4a5568",
                    data: visitData.map((item) => item.y), // Extract counts from data
                    fill: false,
                    barThickness: 8,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right' as const,
                    display: true,
                    labels: {
                        usePointStyle: true
                    },
                },
                title: {
                    display: true,
                    text: 'Patient\'s Visits',
                },
                scales: {
                    xAxes: [
                        {
                            display: true,
                            scaleLabel: {
                                display: true,
                                text: "Day of the Week", // Adjust label as needed
                                fontStyle: 'bold' // Added fontStyle
                            },
                            gridLines: {
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.3)",
                                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            scaleLabel: {
                                display: true,
                                text: "Number of Visits",
                                fontStyle: 'bold' // Added fontStyle
                            },

                        },
                    ],
                },
            },
        },
    });

    return (
        <DashboardCard title="Patient Visits" label="Visits">
            <Bar data={chartData.data} options={chartData.options} />
        </DashboardCard>
    );
}
