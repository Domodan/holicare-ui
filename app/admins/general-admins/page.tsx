import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import GeneralAdmin from "@/components/Administrators/GeneralAdmin";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "General Admin Page | HoliCare",
  description: "This is the General Administrators page for HoliCare Platform",
  // other metadata
};

const GeneralAdminPage = () => {
  return (
    <>
      <Breadcrumb pageName="General Admins" />

      <div className="flex flex-col gap-10">
        <GeneralAdmin />
      </div>
    </>
  );
};

export default GeneralAdminPage;
