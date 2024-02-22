import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import React from 'react';
import { Metadata } from "next";
import { FieldData } from '@/types/fieldData';
import FormBuilder from '@/components/form-field/form_builder';
export const metadata: Metadata = {
    title: "Add Medication | HoliCare",
    description: "This is the Add Medication page for HoliCare Platform",
    // other metadata
}
const Page = () => {
    const formFields: FieldData[] = [
        {
            category: "Dosage Instructions",
            fields: [
                {
                    form: [
                        {
                            label: "Dose Unit", type: "select", options: [
                                { label: "mg", value: "mg" },
                                { label: "ml", value: "ml" },
                            ]
                        },
                        { label: "Dose", type: "text", options: [] },

                    ]
                }, {
                    form: [
                        {
                            label: "Route", type: "select", options: [
                                {
                                    label: "Oral",
                                    value: "Oral"
                                }, {
                                    label: "Inear",
                                    value: "Inear"
                                }, {
                                    label: "Viginally",
                                    value: "viginally"
                                }, {
                                    label: "Ineyes",
                                    value: "Ineyes"
                                }, {
                                    label: "Inhalation",
                                    value: "Inhalation"
                                }, {
                                    label: "Intramuscular",
                                    value: "Intramuscular"
                                }
                            ]
                        },
                        {
                            label: "Frequency", type: "text", options: [
                                { label: "1 time", value: "1 time" },
                                { label: "2 times", value: "2 times" },
                                { label: "3 times", value: "3 times" },
                                { label: "4 times", value: "4 times" },
                                { label: "5 times", value: "5 times" },
                                { label: "6 times", value: "6 times" },
                                { label: "7 times", value: "7 times" },
                                { label: "8 times", value: "8 times" },
                                { label: "9 times", value: "9 times" },
                                { label: "10 times", value: "10 times" },
                            ]
                        },
                    ]
                }, {
                    form: [
                        { label: "Patient Instructions", type: "text", options: [] },
                    ]
                }
            ]
        }, {
            category: "Prescription duration",
            fields: [
                {
                    form: [
                        { label: "From", type: "time", options: [] },
                        { label: "To", type: "time", options: [] },
                    ]
                }
            ]
        }
    ];
    return (
        <div>
            <Breadcrumb pageName='Add Medication' />
            <FormBuilder fields={formFields} />
        </div>
    );
};
export default Page;