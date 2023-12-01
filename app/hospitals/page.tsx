import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Hospitals from "@/components/Hospitals";

export const metadata: Metadata = {
  title: "Hospitals | HoliCare",
  description: "This is the Hospitals page for HoliCare Platform",
  // other metadata
};

const HospitalPage = () => {
  return (
    <>
      <Breadcrumb pageName="Hospitals" />

      <div className="flex flex-col gap-10">
        <Hospitals />
      </div>
    </>
  );
};

export default HospitalPage;
