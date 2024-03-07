import React from 'react';
import { Metadata } from "next";
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import CustomComponent from './CustomComponent';
export const metadata: Metadata = {
    title: "Provisional Diagnosis | HoliCare",
    description: "This is the Provisional Diagnosis page for HoliCare Platform",
    // other metadata
}
const Page = () => {
    return (
        <div >
            <Breadcrumb pageName='Provisional Diagnosis' />
            {/* implement the ui to display the provisional diagnosis */}
            <CustomComponent />
        </div>
    );
};
export default Page;