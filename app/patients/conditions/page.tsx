import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DataTable from '@/components/data_table/datatable';
import React from 'react';
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Conditions | HoliCare",
    description: "This is the Conditions page for HoliCare Platform",
    // other metadata
}
const Page = () => {
    const cols = [
        {
            label: "ID"
        }, {
            label: "Name"
        }, {
            label: "Actions"
        }
    ];
    return (
        <div >
            <Breadcrumb pageName='Conditions' />
            <DataTable columns={cols} />
        </div>
    );
};
export default Page;