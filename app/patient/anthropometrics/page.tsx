import React from 'react';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DataTable from '@/components/data_table/datatable';
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Anthropometrics | HoliCare",
    description: "This is the Anthropometrics page for HoliCare Platform",
    // other metadata
}
const Page = () => {
    const cols = [
        {
            label: "Month"
        },
        {
            label: "Height (cm)"
        }, {
            label: "Weigh (kgs)"
        }, {
            label: "BMI (kg/m2)"
        }

    ];
    // anthropometrics data
    const anthropometricsData = [
        {
            Month: "January",
            Height: 170,
            Weight: 70,
            BMI: `${calculateBMI(170, 70)}`
        },
        {
            Month: "February",
            Height: 171,
            Weight: 71,
            BMI: `${calculateBMI(171, 71)}`
        },
        {
            Month: "March",
            Height: 172,
            Weight: 72,
            BMI: `${calculateBMI(172, 72)}`
        }
    ]
    // Function to calculate BMI
    function calculateBMI(height: number, weight: number) {
        return (weight / ((height / 100) * (height / 100))).toFixed(2);
    }
    // custom data
    let custom = anthropometricsData.map((a, index) => (
        <tr key={index}>
            <td className="border object-center px-4 py-2">{a.Month}</td>
            <td className="border object-center px-4 py-2">{a.Height}</td>
            <td className="border object-center px-4 py-2">{a.Weight}</td>
            <td className="border object-center px-4 py-2">{a.BMI}</td>
        </tr>
    ))
    return (
        <div >
            <Breadcrumb pageName='Anthropometrics' />
            <DataTable columns={cols} customData={custom} />
        </div>
    );
};
export default Page;