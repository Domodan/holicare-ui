import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Nurse from "@/components/Clinicians/Nurse";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Nurses | HoliCare",
  description: "This is Nurses page for HoliCare Platform",
  // other metadata
};

const NursesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Nurses" />

      <div className="flex flex-col gap-10">
        <Nurse />
      </div>
    </>
  );
};

export default NursesPage;
