import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Districts from "@/components/Districts";

export const metadata: Metadata = {
  title: "Districts | HoliCare",
  description: "This is the Districts page for HoliCare Platform",
  // other metadata
};

const DistrictPage = () => {
  return (
    <div>
      <Breadcrumb pageName="Districts" />
      <Districts />
    </div>
  );
};

export default DistrictPage;
