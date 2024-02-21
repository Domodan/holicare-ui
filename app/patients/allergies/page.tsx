import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DataTable from '@/components/data_table/datatable';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "Allergies | HoliCare",
    description: "This is the Allergies page for HoliCare Platform",
    // other metadata
}
const Page = () => {
    const cols = [
        {
            label: "Allergies"
        }
    ];
    return (
        <div >
            <Breadcrumb pageName='Allergies' />
            <DataTable title='Allergies' />
        </div>
    );
};
export default Page;