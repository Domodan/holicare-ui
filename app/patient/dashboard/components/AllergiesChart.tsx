"use client"
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import DashboardCard from './DashboardCard';

// Assuming you have an array of patient allergies (e.g., `patientAllergies`)

const AllergiesChart = () => {
    // const [chartData, setChartData] = React.useState({});

    const patientData = [
        { id: 1, allergies: ['Pollen', 'Dust'] },
        { id: 2, allergies: ['Dust'] },
        { id: 3, allergies: ['Peanuts', 'Seafood'] },
        { id: 4, allergies: ['Dust'] },
        { id: 5, allergies: ['Pollen', 'Dust', 'Peanuts'] },
        // ... more patients
    ];

    // Process patient allergies into chart data (replace with your logic)
    const allergyCounts: { [key: string]: number } = {};
    patientData.forEach((patient) => {
        patient.allergies.forEach((allergy) => {
            allergyCounts[allergy] = (allergyCounts[allergy] || 0) + 1;
        });
    });

    const labels = Object.keys(allergyCounts);
    const data = Object.values(allergyCounts);


    const options = {
        chart: {
            width: 380,
            type: 'pie',
        },
        labels, // Set labels from processed data
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
    return (
        <DashboardCard title="Allergies" label="Patient's Allergies">
            <ReactApexChart options={{ ...options, chart: { ...options.chart, type: "pie" } }} type="pie" series={data} width={380} />
        </DashboardCard>
    );
};

export default AllergiesChart;
