import React from 'react';

const DashboardCard = ({ children, title, label }: { children: React.ReactNode, title?: string, label?: string }) => {
    return (
        < div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-boxdark w-full mb-6 shadow-lg rounded" >
            <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full max-w-full flex-grow flex-1">
                        <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                            {label}
                        </h6>
                        <h2 className="text-blueGray-700 text-xl font-semibold">{title}</h2>
                    </div>
                </div>
            </div>
            <div className="p-4 flex-auto">
                {/* Chart */}
                <div className="relative h-75">
                    {children}
                </div>
            </div>
        </div >
    );
};

export default DashboardCard;