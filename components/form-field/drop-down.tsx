"use client"
import React from 'react';
const SelectComponent = ({ options, label, onChange }: { options: any[], label: string, onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void }) => {
    return (
        <div className="mb-4">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <select className="select select-sm select-bordered w-full" onChange={(e) => onChange(e)}>
                {
                    options.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </div>
    );
};
export default SelectComponent;