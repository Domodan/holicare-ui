"use client"
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import React from 'react';
import { Metadata } from "next";
import TextForm from '@/components/form-field/text_form';
import SelectComponent from '@/components/form-field/drop-down';
// export const metadata: Metadata = {
//     title: "Add Patient | HoliCare",
//     description: "This is the Add Patient page for HoliCare Platform",
//     // other metadata
// }

const fields = [
    {
        category: "Personal Details",
        fields: [
            {
                form: [
                    { label: "First Name", type: "text", options: [] },
                    { label: "Last Name", type: "text", options: [] },
                ]
            }, {
                form: [
                    { label: "Username", type: "text", options: [] },
                    { label: "Email Address", type: "email", options: [] },
                ]
            }, {
                form: [
                    { label: "Password", type: "password", options: [] },
                    { label: "Confirm Password", type: "password", options: [] },
                ]
            }

        ],
    },
    {
        category: "Other Mandatory Data",
        fields: [
            {
                form: [{
                    label: "Date of Birth",
                    type: "date",
                    options: []
                }, {
                    label: "Phone Number",
                    type: "number",
                    options: []
                },],
            },
            {
                form: [
                    {
                        label: "Occupation",
                        type: "text",
                        options: []
                    }, {
                        label: "Emegency contact",
                        type: "phone",
                        options: []
                    },
                ]
            },
            {
                form: [
                    { label: "Avatar", type: "file", accept: "image/*", options: [] },
                    {
                        label: "Age",
                        type: "number",
                        options: []
                    },
                ]
            },
            {
                form: [
                    {
                        label: "Gender",
                        type: "radio",
                        options: [
                            { label: "Male", type: "radio", value: "male" },
                            { label: "Female", type: "radio", value: "female" },
                            { label: "Other", type: "radio", value: "other" },
                        ]
                    }
                ]
            }
        ]
    }, {
        category: "Hospital Attached",
        fields: [
            {
                form: [
                    {
                        label: "Hospital",
                        type: "select",
                        options: [
                            { label: "HoliCare", value: "holicare" },
                            { label: "HoliCare2", value: "holicare2" },
                            { label: "HoliCare3", value: "holicare3" },
                        ]
                    },
                ]
            }
        ]
    }, {
        category: "Patient Location",
        fields: [
            {
                form: [
                    {
                        label: "District",
                        type: "select",
                        options: [
                            // all uganda's districts
                            { label: "Kampala", value: "kampala" },
                            { label: "Mbarara", value: "mbarara" },
                            { label: "Jinja", value: "jinja" },
                            { label: "Mukono", value: "mukono" },
                            { label: "Masaka", value: "masaka" },
                            { label: "Moyo", value: "moyo" },
                            { label: "Nakasongola", value: "nakasongola" },
                            { label: "Kiboga", value: "kiboga" },
                            { label: "Luwero", value: "luwero" },
                            { label: "Mityana", value: "mityana" },
                            { label: "Nakaseke", value: "nakaseke" },
                            { label: "Nakasongola", value: "nakasongola" },
                            { label: "Nebbi", value: "nebbi" },
                            { label: "Pader", value: "pader" },
                            { label: "Soroti", value: "soroti" },
                            { label: "Tororo", value: "tororo" },
                            { label: "Wakiso", value: "wakiso" },
                            { label: "Yumbe", value: "yumbe" },
                            { label: "Zombo", value: "zombo" },
                            { label: "Abim", value: "abim" },
                            { label: "Amolatar", value: "amolatar" },
                            { label: "Amuria", value: "amuria" },
                            { label: "Amuru", value: "amuru" },
                            { label: "Apac", value: "apac" },
                            { label: "Arua", value: "arua" },
                            { label: "Budaka", value: "budaka" },
                            { label: "Bududa", value: "bududa" },
                            { label: "Bugiri", value: "bugiri" },
                            { label: "Bukedea", value: "bukedea" },
                            { label: "Bukomansimbi", value: "bukomansimbi" },
                            { label: "Bukwo", value: "bukwo" },
                            { label: "Bulambuli", value: "bulambuli" },
                            { label: "Buliisa", value: "buliisa" },
                            { label: "Bundibugyo", value: "bundibugyo" },
                            { label: "Bunyangabu", value: "bunyangabu" },
                            { label: "Bushenyi", value: "bushenyi" },
                            { label: "Busia", value: "busia" },
                            { label: "Butaleja", value: "butaleja" },
                            { label: "Dokolo", value: "dokolo" },
                            { label: "Gomba", value: "gomba" },
                            { label: "Ibanda", value: "ibanda" },
                            { label: "Iganga", value: "iganga" },
                            { label: "Isingiro", value: "isingiro" },
                            { label: "Kaabong", value: "kaabong" },
                            { label: "Kabale", value: "kabale" },
                            { label: "Kabarole", value: "kabarole" },
                            {
                                label: "Kaberamaido", value
                                    : "kaberamaido"
                            },
                            { label: "Kagadi", value: "kagadi" },
                            { label: "Kakumiro", value: "kakumiro" },
                            { label: "Kalangala", value: "kalangala" },
                            { label: "Kaliro", value: "kaliro" },
                            { label: "Kalungu", value: "kalungu" },
                            { label: "Kampala", value: "kampala" },
                            { label: "Kamuli", value: "kamuli" },
                            { label: "Kamwenge", value: "kamwenge" },
                            { label: "Kanungu", value: "kanungu" },
                            { label: "Kapchorwa", value: "kapchorwa" },
                            { label: "Kasese", value: "kasese" },
                            { label: "Katakwi", value: "katakwi" },
                            { label: "Kayunga", value: "kayunga" },
                            { label: "Kibaale", value: "kibaale" },
                            { label: "Kiboga", value: "kiboga" },
                        ]
                    }, {
                        label: "County",
                        type: "text",
                        options: [],
                    },
                ]
            }, {
                form: [
                    {
                        label: "Sub County",
                        type: "text",
                        options: [],
                    }, {
                        label: "Parish",
                        type: "text",
                        options: [],
                    },
                ]
            }
        ]
    }

];

export default function Page() {
    return (
        <div className="w-full mx-auto bg-white dark:bg-gray shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <form>
                {fields.map((value, index) => (
                    <div key={index} className="container">
                        <label className='block text-lg font-semibold' htmlFor="first_name">{value.category}</label>
                        <div className='flex md:flex-row flex-col justify-center items-center'>
                            {
                                value.fields.map((value, index) => (
                                    <div className='container w-full' key={index}>
                                        <TextForm label={value.form[0].label} type={value.form[0].type} placeholder={`Enter your ${value.form[0].label}`} onInput={(event: React.ChangeEvent<HTMLInputElement>) => alert(event.target.value)} />
                                        {value.form[1] && <TextForm label={value.form[1].label} type={value.form[1].type} placeholder={`Enter your ${value.form[1].label}`} onInput={(event: React.ChangeEvent<HTMLInputElement>) => alert(event.target.value)} />}
                                        {value.form[0].type == 'radio' || value.form[0].type == 'checkbox' ? (

                                            value.form[0].options.map((value, index) => (
                                                (<div key={index} className="flex flex-row justify-start items-center mb-4">
                                                    <input
                                                        type="radio"
                                                        id={value.label}
                                                        name="gender"
                                                        value={value.value}
                                                        className="mr-2 radio"
                                                    />
                                                    <label
                                                        htmlFor={value.label}
                                                        className="text-gray-700 dark:text-white"
                                                    >
                                                        {value.label}
                                                    </label>
                                                </div>)

                                            ))
                                        ) : value.form[0].type == 'select' ? (
                                            <SelectComponent label={value.form[0].label} options={value.form[0].options} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => alert(event.target.value)} />
                                        ) : (<></>)}
                                    </div>
                                ),)
                            }
                        </div>
                    </div>
                ))
                }

                <div className="flex items-center justify-between">
                    <div className="mb-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

// export default Form;

