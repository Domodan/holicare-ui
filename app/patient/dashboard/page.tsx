import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import { Metadata } from 'next';
import React from 'react';
import CardLineChart from './components/CardLineChart';
import VisitsChart from './components/VisitsChart';
import ConditionsChart from './components/ConditionsChart';
import AnthropometricsChart from './components/AnthropometricsChart';
import TestResultsChart from './components/TextResultChart';
import AppointmentChart from './components/AppointmentChart';
import AllergyDistributionChart from './components/AllergiesChart';
export const metadata: Metadata = {
    title: "Patient\'s Dashboard | HoliCare",
    description: "This is the Patient\'s Dashboard page for HoliCare Platform",
    // other metadata

}
const Page = () => {
    return (
        <div>
            <Breadcrumb pageName="Patient's Dashboard" />
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-1 grid-rows-3">
                <CardLineChart />
                <VisitsChart />
                <ConditionsChart />
                <AnthropometricsChart />
                <TestResultsChart />
                <AllergyDistributionChart />
            </div>
            <AppointmentChart />

        </div>
    );
};
export default Page;