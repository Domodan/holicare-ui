import Head from 'next/head';
import { Metadata } from 'next/types';
import React from 'react';

export const metadata: Metadata = {
    title: "Districts | HoliCare",
    description: "This is the Districts page for HoliCare Platform",
    // other metadata
};

const CustomHeader = ({ title, description }: { title: string, description: string }) => {
    return (
        <Head>
            <title>HoliCare | {title}</title>
            <meta name="title" content={title} />
            <meta name='viewport' content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={description} />
        </Head>
    );
};
export default CustomHeader;