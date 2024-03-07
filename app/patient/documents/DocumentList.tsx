import React from 'react';

const DocumentList = ({ documents }: { documents: any[] }) => {
    return (
        <div className="w-full mx-auto dark:bg-boxdark
        overflow-hidden sm:rounded-lg">
            <div className="bg-gray-50 px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Patient Documents</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {documents.map((document, index) => (
                    <a key={index} href={document.url} target="_blank" className="bg-white overflow-hidden shadow-md rounded-lg hover:shadow-lg">
                        <div className="px-6 py-6">
                            <h3 className="text-lg font-semibold mb-2">{document.name}</h3>
                            <p className="text-sm text-gray-600">{document.date}</p>
                        </div>
                    </a>
                ))}
            </div>

        </div>
    );
};

export default DocumentList;
