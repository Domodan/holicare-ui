import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DataTable from '@/components/data_table/datatable';
import React from 'react';
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Test Results | HoliCare",
    description: "This is the Test Results page for HoliCare Platform",
    // other metadata
}
const Page = () => {
    const cols = [
        {
            label: "Test"
        }, {
            label: "Patient ID"
        }, {
            label: 'Forwarded By'
        }, {
            label: "Test to run"
        }, {
            label: "Sample Name"
        }, {
            label: "Parameters"
        }, {
            label: " Results"
        }, {
            label: "Actions"
        }
    ];
    // test results
    const testData = [
        {
            Test: "Blood Test",
            PatientID: 100,
            ForwardedBy: "Dr. Smith",
            TestToRun: "Complete Blood Count (CBC)",
            SampleName: "Blood",
            Parameters: "Hemoglobin, White Blood Cells, Platelets, etc.",
            Results: "Results Here",
            Actions: "View Details"
        },
        {
            Test: "X-ray",
            PatientID: 101,
            ForwardedBy: "Dr. Johnson",
            TestToRun: "Chest X-ray",
            SampleName: "Chest",
            Parameters: "Lungs, Heart, etc.",
            Results: "Results Here",
            Actions: "View Details"
        },
        {
            Test: "Urinalysis",
            PatientID: 102,
            ForwardedBy: "Dr.Williams",
            TestToRun: "Urine Test",
            SampleName: "Urine",
            Parameters: "Protein, Glucose, pH, etc.",
            Results: "Results Here",
            Actions: "View Details"
        }
    ]
    let custom = testData.map((item, index) => (
        <tr key={index}>
            <td className="border object-center px-4 py-2">{item.Test}</td>
            <td className="border object-center px-4 py-2">{item.PatientID}</td>
            <td className="border object-center px-4 py-2">{item.ForwardedBy}</td>
            <td className="border object-center px-4 py-2">{item.TestToRun}</td>
            <td className="border object-center px-4 py-2">{item.SampleName}</td>
            <td className="border object-center px-4 py-2">{item.Parameters}</td>
            <td className="border object-center px-4 py-2">{item.Results}</td>
            <td className="border object-center px-4 py-2">{item.Actions}</td>
        </tr>
    ),);
    return (
        <div >
            <Breadcrumb pageName='Test Results' />
            <DataTable columns={cols} customData={custom} />
        </div>
    );
};
export default Page;