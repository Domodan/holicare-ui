import React from 'react';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DataTable from '@/components/data_table/datatable';
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Medication | HoliCare",
    description: "This is the Medication page for HoliCare Platform",
    // other metadata
}
const Page = () => {
    const cols = [
        {
            label: "Dosage Instructions"
        }, {
            label: "Dose unit"
        }, {
            label: "Route"
        }, {
            label: "Frequency"
        }, {
            label: "Patient Instructions"
        }, {
            label: "Drug"
        }, {
            label: "Prescription Duration"
        }, {
            label: "Status"
        }
    ]
    return (
        <div >
            <Breadcrumb pageName='Medications' />
            <DataTable columns={cols} />
        </div>
    );
};
export default Page;