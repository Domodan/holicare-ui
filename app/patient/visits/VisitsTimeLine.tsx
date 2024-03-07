import React from 'react';

const VisitTimeline = ({ visits }: { visits: any[] }) => {
    return (
        <div className="container bg-white dark:bg-boxdark rounded-lg mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="border-r border-gray-300 absolute h-full top-0 z-10" style={{ left: '10px' }}></div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {visits.map((visit, index) => (
                    <li key={index}>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className={`timeline-${index % 2 === 0 ? 'start' : 'end'} md:text-${index % 2 === 0 ? 'end' : 'start'} mb-10`}>
                            <time className="font-mono italic">{visit.date}</time>
                            <div className="text-lg font-black">{visit.title}</div>
                            <p>{visit.description}</p>
                        </div>
                        <hr />
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default VisitTimeline;
