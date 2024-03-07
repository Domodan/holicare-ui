"use client"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import DashboardCard from './DashboardCard';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Hypertension',
        'Diabetes mellitus',
        'Asthma',
        'Coronary artery disease',
        'Chronic obstructive pulmonary disease(COPD)',
        'Depression',
        'Osteoarthritis',
        'Rheumatoid arthritis'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3, 9, 4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(192, 103, 23, 0.2)',
                'rgba(125, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(192, 103, 23, 1)',
                'rgba(125, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export default function ConditionsChart() {
    return (
        <DashboardCard title="Conditions" label="Patient's Conditions">
            <Doughnut data={data} options={{ responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true } } }} />
        </DashboardCard>
    );
}
