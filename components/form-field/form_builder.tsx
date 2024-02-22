// generate component code
"use client"
import React from 'react';
import SelectComponent from './drop-down';
import TextForm from './text_form';
import { FieldData } from '@/types/fieldData';
import Radio from './radio';
export default function FormBuilder({ fields, method, onSubmit, submitText }: { fields: FieldData[], method?: string, onSubmit?: () => void, submitText?: string }) {
    // Your component code here
    return (
        <div className="w-full mx-auto bg-white dark:bg-gray shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <form onSubmit={onSubmit} className="w-full" method={method}>
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
                                            <Radio key={index} label={value.form[0].label} value={value.form[0].options} onChange={(event) => alert(event.target.value)} />

                                        ) : (value.form[0].type == 'select') ? (
                                            <SelectComponent label={value.form[0].label} options={value.form[0].options} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => alert(event.target.value)} />
                                        ) : (<></>)}
                                    </div>
                                ),)
                            }
                        </div>
                    </div>
                ))
                }

                <div className="flex flex-row items-center justify-center">
                    <div className="m-4">
                        <button
                            className=" w-100 bg-black-2 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit">
                            {submitText || 'Submit'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};