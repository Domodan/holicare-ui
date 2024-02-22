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
    const rows = [
        [
            {
                label: "/images/user/user.jpg",
            }, {
                label: "12345",
            }, {
                label: "Engineer",
            }, {
                label: "25",
            }, {
                label: "08123456789",
            }, {
                label: "Kampala",
            }, {
                label: "HoliCare",
            }, {
                label: ""
            }
        ]
    ]
    return (
        <div>
            <Breadcrumb pageName='Patients' />
            <DataTable columns={cols} rows={rows} actionComponent={<ButtonComponent buttonText='Add Patient' callbackUrl='/patients/patient_list/add_patient' />} />
        </div>
    );
};
export default Page;