"use client"
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import DashboardCard from './DashboardCard';

export default function VisitsChart() {
    // Sample data (replace with your actual data)
    const visitData = [
        { x: 'Monday', y: 10 },
        { x: 'Tuesday', y: 15 },
        { x: 'Wednesday', y: 8 },
        { x: 'Thursday', y: 12 },
        { x: 'Friday', y: 18 },
    ];
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Patient\'s Visits',
            },
        },
    };
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
            maintainAspectRatio: false,
            responsive: true,
            tooltips: {
                mode: "index",
                intersect: false,
            },
            hover: {
                mode: "nearest",
                intersect: true,
            },
            legend: {
                labels: {
                    fontColor: "rgba(0,0,0,.4)",
                },
                align: "end",
                position: "bottom",
            },
            scales: {
                xAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: "Visit Label", // Adjust label as needed
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
                        display: true,
                        scaleLabel: {
                            display: false,
                            labelString: "Number of Visits",
                        },
                        gridLines: {
                            borderDash: [2],
                            drawBorder: false,
                            borderDashOffset: [2],
                            color: "rgba(33, 37, 41, 0.2)",
                            zeroLineColor: "rgba(33, 37, 41, 0.15)",
                            zeroLineBorderDash: [2],
                            zeroLineBorderDashOffset: [2],
                        },
                    },
                ],
            },
        },
    });

    return (
        <DashboardCard title="Patient Visits" label="Visits">
            <Bar data={chartData.data} options={options} />
        </DashboardCard>
    );
}
