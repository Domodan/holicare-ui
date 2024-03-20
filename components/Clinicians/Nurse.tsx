import { Nurse } from "@/types/nurse";
import Image from "next/image";
import ClinicDataTable from "./clinic_datatable";
import { Doctor } from "@/types/doctor";

const nurseData = [
  [
 , {
    label: "/images/user/user.jpg"
  }, {
    label: "Daniel Ongom",
  }, {
    label: "Mulago",
  }, {
    label: "General Doctor",
  }, {
    label: "ongomdaniel@gdci-lab.net"
  }, {
    label: "Active"
  }
  ],
  // {
  //   id: 2,
  //     avatar: "/images/user/user_female1.jpg",
  //       name: "Mbabazi Ainekirabo",
  //         hospital: "Jinja",
  //           specialty: "Dermatologists",
  //             email: "ainekirabombabazi@gdci-lab.net",
  //               status: "Active",
  //   },
  // {
  //   id: 3,
  //     avatar: "/images/user/user_male1.jpg",
  //       name: "Bukenya Luqman",
  //         hospital: "Mengo",
  //           specialty: "Pulmonologists",
  //             email: "bukenyaluqman@gdci-lab.net",
  //               status: "Inactive",
  //   },
  // {
  //   id: 4,
  //     avatar: "/images/user/user_hacker.jpg",
  //       name: "Jane Doe",
  //         hospital: "Butabika",
  //           specialty: "Neurologist",
  //             email: "janedoe@gdci-lab.net",
  //               status: "Unknown",
  //   },
];

const Nurses = () => {
  return (
    <ClinicDataTable headerTitle="Top Nurses" data={nurseData} />
  );
};

export default Nurses;
