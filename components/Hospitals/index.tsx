import { HOSPITAL } from "@/types/hospital";
import HospitalDataTable from "./hospital_datatable";

const hospitalData: HOSPITAL[] = [
  {
    id: 1,
    name: "Mulago National Referral",
    type: "NR Hospital",
    ownership: "Government",
    district: "Kampala",
    location: "0.3323, 32.3323",
  },
  {
    id: 2,
    name: "Mengo",
    type: "GR Hospital",
    ownership: "Government",
    district: "Kampala",
    location: "0.3023, 30.3023",
  },
  {
    id: 3,
    name: "Jinja Regional Referral",
    type: "RR Hospital",
    ownership: "Prison",
    district: "Jinja",
    location: "0.2423, 2223",
  },
];

const Hospitals = () => {
  return (
    <HospitalDataTable data={hospitalData} headerTitle="Partner Hospitals" />
  );
};

export default Hospitals;
