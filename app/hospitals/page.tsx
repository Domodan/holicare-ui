import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Hospitals from "@/components/Hospitals";
import { Card, CardContent } from "@mui/material";

export const metadata: Metadata = {
  title: "Hospitals | HoliCare",
  description: "This is the Hospitals page for HoliCare Platform",
  // other metadata
};

const HospitalPage = () => {
  return (
    <>
      <Breadcrumb pageName="Hospitals"/>
      <Hospitals />
    </>
  );
};

export default HospitalPage;
