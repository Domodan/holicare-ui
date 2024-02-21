import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DataTable from '@/components/data_table/datatable';
import React from 'react';
import type { Metadata } from "next";
import ButtonComponent from '@/components/buttons/button_component';
export const metadata: Metadata = {
    title: "Patients | HoliCare",
    description: "This is the Patients page for HoliCare Platform",
    // other metadata
}
const Page = () => {
    const cols = [
        {
            label: "Avatar"
        }, {
            label: "Patient ID"
        }, {
            label: "Occupation"
        }, {
            label: "Age"
        }, {
            label: "Phone Number"
        }, {
            label: "Location"
        }, {
            label: "Hospital"
        }, {
            label: "Actions"
        }
    ];

    return (
        <div>
            <Breadcrumb pageName='Patients' />
            <DataTable columns={cols} />
        </div>
    );
};
export default Page;