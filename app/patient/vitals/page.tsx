
import React from 'react';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DataTable from '@/components/data_table/datatable';
import { Metadata } from "next";
import ActionButton from './action_button';
export const metadata: Metadata = {
    title: "Vitals | HoliCare",
    description: "This is the Allergies page for HoliCare Platform",
    // other metadata
}
const Page = () => {
    const cols = [
        {
            label: "Month",
        }, {
            label: "Temp (DEG C)",
        }, {
            label: "BP (mmHg)",
        }, {
            label: "Pulse (beats/min)",
        }, {
            label: "R.Rate (breath/min)",
        }, {
            label: "SPO (%)",
        },

    ]
    // patient's vitals 
    const rowData = [
        [{
            label: "June",
        }, {
            label: "36",
        }, {
            label: "80",
        }, {
            label: "80",
        }, {
            label: "15",
        }, {
            label: "90",
        }], [{
            label: "July",
        }, {
            label: "3",
        }, {
            label: "8",
        }, {
            label: "10",
        }, {
            label: "5",
        }, {
            label: "9",
        }],
    ];
    return (
        <div >
            <Breadcrumb pageName='Vitals' />
            <DataTable title='Vitals' columns={cols} rows={rowData} actionComponent={<ActionButton buttonText='Add Vitals' />} />
        </div>
    );
};
export default Page;