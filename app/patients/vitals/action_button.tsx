import React from 'react';

export default function ActionButton({ buttonText }: { buttonText: string }) {
    return (
        <div>
            <button className="bg-blue hover:bg-blue-700  font-bold py-2 px-4 rounded">
                {buttonText}
            </button>
        </div>
    );
}