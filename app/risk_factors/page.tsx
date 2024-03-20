
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import React from "react";
import DataTable from "./riskfactor_datatable";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "RiskFactors | HoliCare",
    description: "This is the RiskFactors page for HoliCare Platform",
    // other metadata
};
export default function Page() {
    return (
        <div>
            <Breadcrumb pageName="Risk Factors" />
            <DataTable />
        </div>
    );
}