"use client"
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import DashboardCard from './DashboardCard';

// Sample data (replace with your actual data)
const testData = [
    { x: 'Test 1', y: 10 },
    { x: 'Test 2', y: 15 },
    { x: 'Test 3', y: 8 },
    { x: 'Test 4', y: 12 },
];

const TestResultsChart = ({ chartType = 'bar' }) => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right' as const,
            },
            title: {
                display: true,
                text: 'Patient\'s Test Results',
            },
        },
    };
    const labels = testData.map((item) => item.x);
    const data = {
        labels,
        datasets: [
            {
                label: 'Test Results',
                backgroundColor: chartType === 'bar' ? '#4a5568' : 'rgba(54, 162, 235, 0.2)', // Adjust color as needed
                borderColor: chartType === 'bar' ? '#4a5568' : 'rgba(54, 162, 235, 1)', // Adjust color as needed
                data: testData.map((item) => item.y),
                fill: chartType === 'bar', // Set fill only for bar chart
                pointRadius: chartType === 'line' ? 5 : 0, // Set point radius only for line chart
                pointHitRadius: chartType === 'line' ? 10 : 0, // Set point hit radius only for line chart
            },
        ],
    };


    const ChartComponent = chartType === 'bar' ? Bar : Line;

    return (
        <DashboardCard title="Test Results" label="Patient's Test Results">
            <ChartComponent data={data} options={options} />
        </DashboardCard>
    );
};

export default TestResultsChart;
