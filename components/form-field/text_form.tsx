"use client"
import React from 'react';
const TextForm = ({ label, type, placeholder, onInput }: { label: string, type?: string, placeholder: string, onInput: (event: React.ChangeEvent<HTMLInputElement>) => void }) => {
    return (
        <div className="w-full mb-4 px-2">


            {(type !== 'radio' && type !== 'select' && type !== 'checkbox') ? (
                <>
                    <div className="label">
                        <span className="label-text">{label}</span>
                    </div>
                    <input
                        className="shadow appearance-none border border-stroke rounded w-full py-2 px-3 text-gray-700 dark:text-white leading-tight focus:outline-none focus:shadow-outline"
                        type={type} placeholder={placeholder} {...(type === 'file' ? { accept: "image/*" } : {})} onChange={(event: React.ChangeEvent<HTMLInputElement>) => onInput(event)}
                    />
                </>

            ) : (
                <></>
            )}
        </div>
    );
};
export default TextForm;