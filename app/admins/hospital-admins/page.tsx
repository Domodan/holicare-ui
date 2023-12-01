import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import HospitalAdmin from "@/components/Administrators/HospitalAdmin";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Hospital Admin Page | HoliCare",
  description: "This is the Hospital Administrators page for HoliCare Platform",
  // other metadata
};

const HospitalAdminPage = () => {
  return (
    <>
      <Breadcrumb pageName="Hospital Admins" />

      <div className="flex flex-col gap-10">
        <HospitalAdmin />
      </div>
    </>
  );
};

export default HospitalAdminPage;
