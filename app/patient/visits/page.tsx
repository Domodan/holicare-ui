import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DataTable from '@/components/data_table/datatable';
import { Metadata } from 'next';
import React from 'react';
import VisitTimeline from './VisitsTimeLine';
export const metadata: Metadata = {
    title: "Visits | HoliCare",
    description: "This is the Visits page for HoliCare Platform",
    // other metadata
}
const Page = () => {
    const patientVisits = [
        {
            date: "2023-01-15",
            title: "Primary Care Checkup",
            description: "Routine checkup with primary care physician. Blood pressure, weight, and general health assessment performed."
        },
        {
            date: "2023-02-05",
            title: "Dermatology Consultation",
            description: "Consultation with dermatologist for evaluation of skin condition. Prescription provided for topical treatment."
        },
        {
            date: "2023-03-10",
            title: "Orthopedic Appointment",
            description: "Follow-up appointment with orthopedic surgeon after knee surgery. X-rays reviewed, and progress assessed."
        },
        {
            date: "2023-04-20",
            title: "Allergy Testing",
            description: "Allergy testing conducted to identify specific allergens. Treatment plan discussed based on test results."
        },
        {
            date: "2023-05-15",
            title: "Cardiology Consultation",
            description: "Consultation with cardiologist for evaluation of heart condition. EKG and stress test performed."
        }
    ];

    return (
        <div >
            <Breadcrumb pageName='Visits' />
            <VisitTimeline visits={patientVisits} />
        </div>
    );
};
export default Page;