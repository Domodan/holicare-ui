import React from 'react';
import { Metadata } from "next";
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import AppointmentChart from '../dashboard/components/AppointmentChart';
export const metadata: Metadata = {
    title: "Appointments | HoliCare",
    description: "This is the Appointments page for HoliCare Platform",
    // other metadata
}
const Page = () => {
    return (
        <div >
            <Breadcrumb pageName='Appointments' />
            {/* appointmets ui */}
            <AppointmentChart />
        </div>
    );
};
export default Page;