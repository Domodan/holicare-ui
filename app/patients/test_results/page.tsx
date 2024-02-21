import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DataTable from '@/components/data_table/datatable';
import React from 'react';
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Test Results | HoliCare",
    description: "This is the Test Results page for HoliCare Platform",
    // other metadata
}
const Page = () => {
    const cols = [
        {
            label: "Test"
        }, {
            label: "Patient ID"
        }, {
            label: 'Forwarded By'
        }, {
            label: "Test to run"
        }, {
            label: "Sample Name"
        }, {
            label: "Parameters"
        }, {
            label: " Results"
        }, {
            label: "Actions"
        }
    ];
    return (
        <div >
            <Breadcrumb pageName='Test Results' />
            <DataTable columns={cols} />
        </div>
    );
};
export default Page;