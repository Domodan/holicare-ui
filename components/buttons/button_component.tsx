"use client"
import React from 'react';
import DialogBox from './dialog_box';

const ButtonComponent = ({ buttonText, callback, callbackUrl }: { buttonText: string, callbackUrl: string, callback?: () => void }) => {
    const [open, setOpen] = React.useState(false);
    // helper function
    const handleClick = () => {
        window.location.href = callbackUrl;
    }
    return (
        <>
            <button className='bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => callback ? callback() : handleClick()}>
                {buttonText}
            </button>
        </>
    );
};
export default ButtonComponent;