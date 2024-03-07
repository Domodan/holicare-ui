import React from 'react';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import DataTable from '@/components/data_table/datatable';
import { Metadata } from "next";
import ActionButton from '../vitals/action_button';
import ButtonComponent from '@/components/buttons/button_component';
export const metadata: Metadata = {
    title: "Medication | HoliCare",
    description: "This is the Medication page for HoliCare Platform",
    // other metadata
}
const Page = () => {
    const cols = [
        {
            label: "Dosage Instructions"
        }, {
            label: "Dose unit"
        }, {
            label: "Route"
        }, {
            label: "Frequency"
        }, {
            label: "Patient Instructions"
        }, {
            label: "Drug"
        }, {
            label: "Prescription Duration"
        }, {
            label: "Status"
        }
    ]
    // medication data
    const medicationData = [
        {
            DosageInstructions: "10 mg once daily",
            DoseUnit: "mg",
            Route: "Oral",
            Frequency: "Once daily",
            PatientInstructions: "Take with water",
            Drug: "Lisinopril",
            PrescriptionDuration: "Ongoing",
            Status: "Active"
        },
        {
            DosageInstructions: "500 mg twice daily",
            DoseUnit: "mg",
            Route: "Oral",
            Frequency: "Twice daily",
            PatientInstructions: "Take with meals",
            Drug: "Metformin",
            PrescriptionDuration: "Ongoing",
            Status: "Active"
        },
        {
            DosageInstructions: "20 mg once daily",
            DoseUnit: "mg",
            Route: "Oral",
            Frequency: "Once daily",
            PatientInstructions: "Take at bedtime",
            Drug: "Atorvastatin",
            PrescriptionDuration: "Ongoing",
            Status: "Active"
        }
    ];

    console.log(medicationData);

    let custom = medicationData.map((m, index) => {
        return (
            <tr key={index}>
                <td key={index} className="border object-center px-4 py-2" >{m.DosageInstructions}</td>
                <td key={index} className="border object-center px-4 py-2" >{m.DoseUnit}</td>
                <td key={index} className="border object-center px-4 py-2" >{m.Route}</td>
                <td key={index} className="border object-center px-4 py-2" >{m.Frequency}</td>
                <td key={index} className="border object-center px-4 py-2" >{m.PatientInstructions}</td>
                <td key={index} className="border object-center px-4 py-2" >{m.Drug}</td>
                <td key={index} className="border object-center px-4 py-2" >{m.PrescriptionDuration}</td>
                <td key={index} className="border object-center px-4 py-2" >{m.Status}</td>
            </tr>

        )
    })

    return (
        <div >
            <Breadcrumb pageName='Medications' />
            <DataTable columns={cols} customData={custom} actionComponent={<ButtonComponent buttonText='Add Medication' callbackUrl='/patients/medications/add' />} />
        </div>
    );
};
export default Page;