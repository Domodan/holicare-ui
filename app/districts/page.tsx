import { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Districts from "@/components/Districts";
import { Card, CardContent } from "@mui/material";

export const metadata: Metadata = {
  title: "Districts | HoliCare",
  description: "This is the Districts page for HoliCare Platform",
  // other metadata
};

const DistrictPage = () => {
  return (
    <div>
      <Breadcrumb pageName="Districts" />
      <Card>
        <CardContent>
          <Districts />
        </CardContent>
      </Card>
    </div>
  );
};

export default DistrictPage;
