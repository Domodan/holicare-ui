"use client"
import { Search } from '@mui/icons-material';
import React from 'react';

const CustomComponent = () => {
    const [signs, setSigns] = React.useState<any>([]);
    return (
        <div className="container bg-white dark:bg-boxdark rounded-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col justify-around">
                <div className='p-4'>
                    <h2 className="text-lg text-black font-bold mb-4">Signs And Symptoms</h2>
                    {/* Other fields and the button */}
                    {/* button to add the sysmptoms */}
                    {
                        signs.map((sign: any, index: number) => (
                            <div key={index} className="flex items-center mb-4">
                                <input type="text" placeholder="Type here" className="input input-md input-bordered w-full max-w-xs" />
                                <button className=' text-white hover:bg-blue-700 bg-meta-1  font-bold py-2 px-4 rounded'> <Search /></button>
                            </div>
                        ))
                    }
                    <button className=' bg-black text-white hover:bg-blue-700  font-bold py-2 px-4 rounded' onClick={() => setSigns([...signs, ''])} >Add Signs & Symptoms</button>
                </div>
                {/* text input for other fields */}
                <textarea className="input input-bordered" cols={50} rows={130} placeholder='Tentative Diagonosis'></textarea>
                <input type="text" className="input input-bordered my-4" placeholder="Patient' s Email" />
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row justify-around">
                        <input type="checkbox" defaultChecked={false} className="checkbox checkbox-md mx-2" id="" />
                        <p>I acknowledge that all symptoms have been captured</p>
                    </div>

                    <div className="flex flex-row justify-around">
                        <input type="checkbox" defaultChecked={false} className="checkbox checkbox-md mx-2" id="" />
                        <p>Recommend LAB Test</p>
                    </div>
                </div>
                <div className="container m-4 my-6">
                    <button className=' bg-black text-white hover:bg-blue-700  font-bold py-2 px-4 rounded'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default CustomComponent;