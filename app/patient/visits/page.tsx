import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DataTable from '@/components/data_table/datatable';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
    title: "Visits | HoliCare",
    description: "This is the Visits page for HoliCare Platform",
    // other metadata
}
const Page = () => {
    const cols = [
        {
            label: ""
        }
    ]
    return (
        <div >
            <Breadcrumb pageName='Visits' />
            <DataTable columns={[]} />
        </div>
    );
};
export default Page;