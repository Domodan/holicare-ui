
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
            label: "Temperature",
        }, {
            label: "Bp",
        }, {
            label: "Pulse",
        }, {
            label: "Respiratory",
        }, {
            label: "SPO",
        }, {
            label: "Action",
        }
    ]
    return (
        <div >
            <Breadcrumb pageName='Vitals' />
            <DataTable title='Vitals' columns={cols} actionComponent={<ActionButton buttonText='Add Vitals' />} />
        </div>
    );
};
export default Page;