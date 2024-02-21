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
            label: "Height"
        }, {
            label: "Weight"
        }, {
            label: "BMI"
        }, {
            label: "Date"
        },
        {
            label: "Actions"
        }
    ];
    return (
        <div >
            <Breadcrumb pageName='Anthropometrics' />
            <DataTable columns={cols} />
        </div>
    );
};
export default Page;