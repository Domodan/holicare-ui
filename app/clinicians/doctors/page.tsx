import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Doctor from "@/components/Clinicians/Doctor";
import { Card, CardContent } from "@mui/material";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Doctors | HoliCare",
  description: "This is Doctors page for HoliCare Platform",
  // other metadata
};

const DoctorsPage = () => {
  return (
    <>
      <Breadcrumb pageName="Doctors" />
      <Card className="rounded-lg border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <CardContent className="max-w-full overflow-x-auto">
          <Doctor />
        </CardContent>
      </Card>

    </>
  );
};

export default DoctorsPage;
