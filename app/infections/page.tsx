
import React from 'react';
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import type { Metadata } from 'next';
import DataTable from '@/components/data_table/datatable';
import ButtonComponent from '@/components/buttons/button_component';
// metadata
export const metadata: Metadata = {
  title: "Infections | HoliCare",
  description: "This is the Infections page for HoliCare Platform",
  // other metadata
};
export default function Page() {
  const cols = [
    { field: 'id', label: 'ID' },
    { field: 'title', label: 'Infection', width: 130 },
    { field: 'symptom', label: 'Symptom', width: 200 },
    { field: 'risk_factors', label: 'Risk Factors', width: 200 },
    { field: 'created_at', label: 'Date Created', width: 130 },
    { field: 'updated_at', label: 'Date Updated', width: 130 },
  ];

  const rows = [
    [
      {
        label: "/images/user/user.jpg",
      }, {
        label: "12345",
      }, {
        label: "Engineer",
      }, {
        label: "25",
      }, {
        label: "08123456789",
      }, {
        label: "Kampala",
      }
    ]
  ]
  return (
    <>
      <Breadcrumb pageName="Infections" />
      <div className="flex flex-col gap-10">
        {/* <Infections/> */}
        <div className="rounded-lg border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark  text-black dark:text-white dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div>
            <DataTable columns={cols} rows={rows} actionComponent={<ButtonComponent buttonText='Add Infection' callbackUrl='/' />} />
          </div>
        </div>
      </div>
    </>
  );
};