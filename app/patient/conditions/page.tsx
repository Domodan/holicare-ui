import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DataTable from '@/components/data_table/datatable';
import React from 'react';
import type { Metadata } from "next";
import { DeleteForever, Edit, VisibilityRounded } from '@mui/icons-material';
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
    const ActionButton = () => {
        return (
            <div className="flex flex-row items-center justify-around">
                <button><Edit /></button>
                <button><VisibilityRounded /></button>
                <button><DeleteForever /></button>
            </div>
        )
    }
    // conditions data
    /**
     * 'Diabetes mellitus',
        'Asthma',
        'Coronary artery disease',
        'Chronic obstructive pulmonary disease(COPD)',
        'Depression',
        'Osteoarthritis',
     */
    const rowData = [
        [{
            label: "12345",
        }, {
            label: "Diabetes",
        }, {
            label: <ActionButton />
        },],

        [{
            label: "12345",
        }, {
            label: "Asthma",
        }, {
            label: <ActionButton />
        },],

        [{
            label: "12345",
        }, {
            label: "COPD",
        }, {
            label: <ActionButton />
        },],
    ];

    return (
        <div >
            <Breadcrumb pageName='Conditions' />
            <DataTable columns={cols} rows={rowData} />
        </div>
    );
};
export default Page;