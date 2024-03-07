import React from 'react';
import { Metadata } from "next";
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DocumentList from './DocumentList';
export const metadata: Metadata = {
    title: "Documents | HoliCare",
    description: "This is the Documents page for HoliCare Platform",
    // other metadata
}
const Page = () => {
    // implement the ui to display the documents
    const patientDocuments = [
        {
            name: "Medical History",
            url: "https://example.com/medical_history.pdf",
            date: "2023-01-15"
        },
        {
            name: "Lab Report",
            url: "https://example.com/lab_report.pdf",
            date: "2023-02-05"
        },
        {
            name: "X-ray Image",
            url: "https://example.com/xray_image.jpg",
            date: "2023-03-10"
        },
        {
            name: "Prescription",
            url: "https://example.com/prescription.pdf",
            date: "2023-04-20"
        },
        {
            name: "Prescription",
            url: "https://example.com/prescription.pdf",
            date: "2023-04-20"
        }
    ];

    return (
        <div >
            <Breadcrumb pageName='Documents' />
            {/* implement the ui to display the documents */}
            <DocumentList documents={patientDocuments} />
        </div>
    );
};
export default Page;