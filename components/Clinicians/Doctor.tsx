import { Doctor } from "@/types/doctor";
import { Card, CardContent } from "@mui/material";
import Image from "next/image";
import ClinicDataTable from "./clinic_datatable";

const doctorData: Doctor[] = [
  {
    id: 1,
    avatar: "/images/user/user.jpg",
    name: "Daniel Ongom",
    hospital: "Mulago",
    specialty: "General Doctor",
    email: "ongomdaniel@gdci-lab.net",
    status: "Active",
  },
  {
    id: 2,
    avatar: "/images/user/user_female1.jpg",
    name: "Mbabazi Ainekirabo",
    hospital: "Jinja",
    specialty: "Dermatologists",
    email: "ainekirabombabazi@gdci-lab.net",
    status: "Active",
  },
  {
    id: 3,
    avatar: "/images/user/user_male1.jpg",
    name: "Bukenya Luqman",
    hospital: "Mengo",
    specialty: "Pulmonologists",
    email: "bukenyaluqman@gdci-lab.net",
    status: "Inactive",
  },
  {
    id: 4,
    avatar: "/images/user/user_hacker.jpg",
    name: "Jane Doe",
    hospital: "Butabika",
    specialty: "Neurologist",
    email: "janedoe@gdci-lab.net",
    status: "Unknown",
  },
];

const Doctors = () => {
  /**

   */
  return (
    <ClinicDataTable headerTitle="Top Doctors" data={doctorData} />
  );
};

export default Doctors;
