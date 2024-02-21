"use client"
import React from 'react';
import DialogBox from './dialog_box';

const ButtonComponent = ({ buttonText, callback }: { buttonText: string, callback?: any }) => {
    const [open, setOpen] = React.useState(false);
    // helper function
    const handleClick = () => {
        setOpen(true);
    }
    return (
        <>
            <button className='bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleClick()}>
                {buttonText}
            </button>
            {/* <React.Fragment> */}
            <DialogBox title="Title" onAction={callback} actionLabel="Submit" />
            {/* </React.Fragment> */}
        </>
    );
};
export default ButtonComponent;