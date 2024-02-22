import { Option } from '@/types/fieldData';
import React from 'react';

const Radio = ({ label, value, onChange }: { label: string, value: Option[], onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void }) => {
    return (
        <div>
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            {
                value.map((radio, index) => (
                    <div key={index} className="flex flex-row justify-start items-center mb-4">
                        <input
                            type="radio"
                            name="gender"
                            value={radio.value}
                            className="mr-2 radio"
                            onChange={(event) => onChange!(event)}
                        />
                        <label
                            className="text-gray-700 dark:text-white"
                        >
                            {radio.label}
                        </label>
                    </div>
                ))
            }
        </div>
    );
};
export default Radio;