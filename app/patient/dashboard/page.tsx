import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
    title: "Patient\'s Dashboard | HoliCare",
    description: "This is the Patient\'s Dashboard page for HoliCare Platform",
    // other metadata

}
const Page = () => {
    return (
        <div>
            <Breadcrumb pageName="Patient's Dashboard" />
        </div>
    );
};
export default Page;