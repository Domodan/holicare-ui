
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import React from "react";
import DataTable from "./riskfactor_datatable";
import { Card, CardContent } from "@mui/material";
import type { Metadata } from "next";
import CustomTextField from "@/components/textfield/custom_textfield";
import { LoadingButton } from "@mui/lab";
import CustomHeader from "@/components/customs/custom_header";

export const metadata: Metadata = {
    title: "RiskFactors | HoliCare",
    description: "This is the RiskFactors page for HoliCare Platform",
    // other metadata
};
export default function Page() {
    return (
        <div>
            <CustomHeader title="Risk Factors" description="Risk Factors" />
            <Breadcrumb pageName="Risk Factors" />
            <Card>
                <CardContent>
                    <DataTable />
                </CardContent>
            </Card>
        </div>
    );
}