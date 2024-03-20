import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Doctor from "@/components/Clinicians/Doctor";

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
          <Doctor />
    </>
  );
};

export default DoctorsPage;
