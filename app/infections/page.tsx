
import React from 'react';
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Card, CardContent } from '@mui/material';
import CustomHeader from '@/components/customs/custom_header';
import type { Metadata } from 'next';
import InfectionsDataTable from './datatable';
// metadata
export const metadata: Metadata = {
  title: "Infections | HoliCare",
  description: "This is the Infections page for HoliCare Platform",
  // other metadata
};
export default function Page() {
  return (
    <>
      <Breadcrumb pageName="Infections" />
      <div className="flex flex-col gap-10">
        <CustomHeader title="Infections" description="Infections" />
        {/* <Infections/> */}
        <Card className="rounded-lg border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark  text-black dark:text-white dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <CardContent>
            <InfectionsDataTable />
          </CardContent>
        </Card>
      </div>
    </>
  );
};