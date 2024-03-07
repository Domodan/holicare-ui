import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import SidebarLinkGroup from "./SidebarLinkGroup";
import DashboardIcon from "../icons/dasboardIcon";
import AdminsIcon from "../icons/adminsIcon";
import ArrowDownIcon from "../icons/arrowDownIcon";
import HospitalIcon from "../icons/hospitalIcon";
import ClinicIcon from "../icons/clinicIcon";
import DistrictIcon from "../icons/districtIcon";
import LabIcon from "../icons/labIcon";
import PatientsIcon from "../icons/patients";
import SchedulesIcon from "../icons/Schedules";
import ProfileIcon from "../icons/profile";
import InfectionIcon from "../icons/infectionIcon";
import RiskFactorsIcon from "../icons/riskFactors";
import SideBarTile from "./SideBarTile";
import VisitIcon from "../icons/visitIcon";
import VitalsIcon from "../icons/vitalsIcon";
import AllergiesIcon from "../icons/allergiesIcon";
import ConditionIcon from "../icons/conditionIcon";
import MedicationIcon from "../icons/medicationIcon";
import TestResultIcon from "../icons/testResult";
import AppointmentIcon from "../icons/appointmentIcon";
import DiagonosisIcon from "../icons/diagonosisIcon";
import DocumentIcon from "../icons/documentIcon";
import SidebarButton from "../icons/sidebar_button";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );
  // hook to handle selected tile
  const [selectedTile, setSelectedTile] = React.useState<number>(parseInt(localStorage.getItem("selected") ?? "0"))

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);
  const patientRoutes = [
    {
      label: "Dashboard",
      url: "/patient/dashboard",
      icon: <DashboardIcon />,
    }, {
      label: "Visits",
      url: "/patient/visits",
      icon: <VisitIcon />,
    }, {
      label: "Vitals",
      url: "/patient/vitals",
      icon: <VitalsIcon />,
    }, {
      label: "Allergies",
      url: "/patient/allergies",
      icon: <AllergiesIcon />,
    }, {
      label: "Conditions",
      url: "/patient/conditions",
      icon: <ConditionIcon />,
    }, {
      label: "Medications",
      url: "/patient/medications",
      icon: <MedicationIcon />,
    }, {
      label: "Test Results",
      url: "/patient/test_results",
      icon: <TestResultIcon />,
    }, {
      label: "Appointments",
      url: "/patient/appointments",
      icon: <AppointmentIcon />,
    }, {
      label: "Anthropometrics",
      url: "/patient/anthropometrics",
      icon: <DashboardIcon />,
    }, {
      label: "Provisional Diagnosis",
      url: "/patient/provisional_diagnosis",
      icon: <DiagonosisIcon />,
    }, {
      label: "Documents",
      url: "/patient/documents",
      icon: <DocumentIcon />,
    }
  ]
  // function to update the patient's sidebar
  const updateSidebar = (index: number) => {
    setSelectedTile(index)
    localStorage.setItem("selected", index.toString())
  }

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 pt-5.5 lg:pt-6.5">
        <Link href="/">
          <Image
            width={176}
            height={32}
            src={"/images/logo/holicare.svg"}
            // src={"/images/logo/logo.svg"}
            alt="Logo"
          />
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          {/* sidebar button */}
          <SidebarButton />
          {/* end of sidebar button */}
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          {
            pathname.startsWith('/patient/') ?
              (
                <>
                  <ul className="mb-6 flex flex-col gap-1.5">

                    {
                      patientRoutes.map((element, index) => (
                        <SideBarTile url={element.url} onSelect={() => updateSidebar(index)} icon={element.icon} title={element.label} selected={selectedTile == index} key={index} />
                      ))
                    }
                  </ul>
                </>
              ) : (<>
                <div>
                  <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                    MENU
                  </h3>

                  <ul className="mb-6 flex flex-col gap-1.5">
                    {/* <!-- Menu Item Dashboard --> */}
                    <li>
                      <Link
                        href="/"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === "/" || pathname.includes("dashboard")) &&
                          "bg-graydark dark:bg-meta-4"
                          }`}
                      >
                        {/* dashboard icon */}
                        <DashboardIcon />
                        Dashboard
                      </Link>
                    </li>
                    {/* <!-- Menu Item Dashboard --> */}

                    {/* <!-- Menu Item Administrators --> */}
                    <SidebarLinkGroup
                      activeCondition={
                        pathname === "/admins" || pathname.includes("admins")
                      }
                    >
                      {(handleClick, open) => {
                        return (
                          <React.Fragment>
                            <Link
                              href="#"
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === "/admins" ||
                                pathname.includes("admins")) &&
                                "bg-graydark dark:bg-meta-4"
                                }`}
                              onClick={(e) => {
                                e.preventDefault();
                                sidebarExpanded
                                  ? handleClick()
                                  : setSidebarExpanded(true);
                              }}
                            >
                              {/* admins icon */}
                              <AdminsIcon />
                              Administrators
                              {/* arrow down icon */}
                              <ArrowDownIcon open={open} />
                            </Link>
                            <div
                              className={`translate transform overflow-hidden ${!open && "hidden"
                                }`}
                            >
                              <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                <li>
                                  <Link
                                    href="/admins/hospital-admins"
                                    className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathname === "/admins/hospital-admins" &&
                                      "text-white"
                                      } `}
                                  >
                                    Hospital Admin
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/admins/general-admins"
                                    className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathname === "/admins/general-admins" &&
                                      "text-white"
                                      } `}
                                  >
                                    General Admin
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </React.Fragment>
                        );
                      }}
                    </SidebarLinkGroup>
                    {/* <!-- Menu Item Administrators --> */}

                    {/* <!-- Start: Menu Item Hospitals --> */}
                    <li>
                      <Link
                        href="/hospitals"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === "/hospitals" ||
                          pathname.includes("hospitals")) &&
                          "bg-graydark dark:bg-meta-4"
                          }`}
                      >
                        {/* hospistal icon */}
                        <HospitalIcon />
                        Hospitals
                      </Link>
                    </li>
                    {/* <!-- End: Menu Item Hospitals --> */}

                    {/* <!-- Start: Menu Item Clinicians --> */}
                    <SidebarLinkGroup
                      activeCondition={
                        pathname === "/clinicians" || pathname.includes("clinicians")
                      }
                    >
                      {(handleClick, open) => {
                        return (
                          <React.Fragment>
                            <Link
                              href="#"
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === "/clinicians" ||
                                pathname.includes("clinicians")) &&
                                "bg-graydark dark:bg-meta-4"
                                }`}
                              onClick={(e) => {
                                e.preventDefault();
                                sidebarExpanded
                                  ? handleClick()
                                  : setSidebarExpanded(true);
                              }}
                            >
                              {/* <svg
													className="fill-current"
													xmlns="http://www.w3.org/2000/svg"
													height="1em"
													viewBox="0 0 448 512"
												>
													<path d="M96 128V70.2c0-13.3 8.3-25.3 20.8-30l96-36c7.2-2.7 15.2-2.7 22.5 0l96 36c12.5 4.7 20.8 16.6 20.8 30V128h-.3c.2 2.6 .3 5.3 .3 8v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V136c0-2.7 .1-5.4 .3-8H96zm48 48c0 44.2 35.8 80 80 80s80-35.8 80-80V160H144v16zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6zM208 48V64H192c-4.4 0-8 3.6-8 8V88c0 4.4 3.6 8 8 8h16v16c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V96h16c4.4 0 8-3.6 8-8V72c0-4.4-3.6-8-8-8H240V48c0-4.4-3.6-8-8-8H216c-4.4 0-8 3.6-8 8z" />
												</svg> */}
                              <ClinicIcon />
                              Clinicians
                              <ArrowDownIcon open={open} />
                            </Link>
                            <div
                              className={`translate transform overflow-hidden ${!open && "hidden"
                                }`}
                            >
                              <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                <li>
                                  <Link
                                    href="/clinicians/doctors"
                                    className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathname === "/clinicians/doctors" &&
                                      "text-white"
                                      } `}
                                  >
                                    Doctor
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/clinicians/nurses"
                                    className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathname === "/clinicians/nurses" &&
                                      "text-white"
                                      } `}
                                  >
                                    Nurse
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </React.Fragment>
                        );
                      }}
                    </SidebarLinkGroup>
                    {/* <!-- End: Menu Item Clinicians --> */}

                    {/* <!-- Start: Menu Item Districts --> */}
                    <li>
                      <Link
                        href="/districts"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === "/districts" ||
                          pathname.includes("districts")) &&
                          "bg-graydark dark:bg-meta-4"
                          }`}
                      >
                        <DistrictIcon />
                        Districts
                      </Link>
                    </li>
                    {/* <!-- End: Menu Item Districts --> */}

                    {/* <!-- Start: Menu Item Laboratory --> */}
                    <SidebarLinkGroup
                      activeCondition={
                        pathname === "/lab" || pathname.includes("lab")
                      }
                    >
                      {(handleClick, open) => {
                        return (
                          <React.Fragment>
                            <Link
                              href="#"
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === "/lab" || pathname.includes("lab")) &&
                                "bg-graydark dark:bg-meta-4"
                                }`}
                              onClick={(e) => {
                                e.preventDefault();
                                sidebarExpanded
                                  ? handleClick()
                                  : setSidebarExpanded(true);
                              }}
                            >
                              {/* lab icon */}
                              <LabIcon />
                              {/* <svg
													className="fill-current"
													xmlns="http://www.w3.org/2000/svg"
													height="1em"
													viewBox="0 0 512 512"
												>
													<path d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96V384c0 53 43 96 96 96c28.6 0 54.2-12.5 71.8-32.3c.1-14.2 5.6-28.3 16.4-39.1c.2-.2 .1-.6-.2-.6c-30.9 0-56-25.1-56-56s25.1-56 56-56c.3 0 .4-.4 .2-.6c-21.9-21.9-21.9-57.3 0-79.2c2.4-2.4 5-4.6 7.8-6.5V96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160 96 32zM96 192V96h64v96H96zM216 376c28.8 0 43.2 34.8 22.9 55.2c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0c20.4-20.4 55.2-5.9 55.2 22.9c0 13.3 10.7 24 24 24s24-10.7 24-24c0-28.8 34.8-43.2 55.2-22.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9C444.8 410.8 459.2 376 488 376c13.3 0 24-10.7 24-24s-10.7-24-24-24c-28.8 0-43.2-34.8-22.9-55.2c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0C410.8 259.2 376 244.8 376 216c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 28.8-34.8 43.2-55.2 22.9c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9c20.4 20.4 5.9 55.2-22.9 55.2c-13.3 0-24 10.7-24 24s10.7 24 24 24zm104-88a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm40 96a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
												</svg> */}
                              Laboratory
                              <ArrowDownIcon open={open} />
                            </Link>
                            <div
                              className={`translate transform overflow-hidden ${!open && "hidden"
                                }`}
                            >
                              <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                <li>
                                  <Link
                                    href="/"
                                    className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathname === "/" && "text-white"
                                      } `}
                                  >
                                    Laboratory
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/"
                                    className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathname === "/" && "text-white"
                                      } `}
                                  >
                                    Lab Attendant
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </React.Fragment>
                        );
                      }}
                    </SidebarLinkGroup>
                    {/* <!-- End: Menu Item Laboratory --> */}
                  </ul>
                </div>

                {/* <!-- Patients Group --> */}
                <div>
                  <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                    PATIENTS
                  </h3>

                  <ul className="mb-6 flex flex-col gap-1.5">
                    {/* <!-- Start: Menu Item Patients --> */}
                    <SidebarLinkGroup
                      activeCondition={
                        pathname === "/patients" || pathname.includes("patients")
                      }
                    >
                      {(handleClick, open) => {
                        return (
                          <React.Fragment>
                            <Link
                              href="#"
                              className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${(pathname === "/patients" ||
                                pathname.includes("patients")) &&
                                "bg-graydark dark:bg-meta-4"
                                }`}
                              onClick={(e) => {
                                e.preventDefault();
                                sidebarExpanded
                                  ? handleClick()
                                  : setSidebarExpanded(true);
                              }}
                            >
                              {/* patient icon */}
                              <PatientsIcon />
                              Patients
                              <ArrowDownIcon open={open} />
                            </Link>
                            {/* <!-- Dropdown Menu Start --> */}
                            <div
                              className={`translate transform overflow-hidden ${!open && "hidden"
                                }`}
                            >
                              <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                                <li>
                                  <Link
                                    href="/patients"
                                    className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathname === "/patients/patient_list" && "text-white"
                                      }`}
                                  >
                                    Patient List
                                  </Link>
                                </li>   <li>
                                  <Link
                                    href="/patients/add_patient"
                                    className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${pathname === "/patients/patient_list/add_patient" && "text-white"
                                      }`}
                                  >
                                    Add Patient
                                  </Link>
                                </li>

                              </ul>
                            </div>
                            {/* <!-- Dropdown Menu End --> */}
                          </React.Fragment>
                        );
                      }}
                    </SidebarLinkGroup>
                    {/* <!-- End: Menu Item Patients --> */}
                  </ul>
                </div>

                {/* <!-- Others Group --> */}
                <div>
                  <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                    OTHERS
                  </h3>

                  <ul className="mb-6 flex flex-col gap-1.5">
                    {/* <!-- Start: Menu Item Schedules --> */}
                    <li>
                      <Link
                        href="/schedules"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("schedules") &&
                          "bg-graydark dark:bg-meta-4"
                          }`}
                      >
                        {/* schedule icon */}
                        <SchedulesIcon />
                        Schedules
                      </Link>
                    </li>
                    {/* <!-- End: Menu Item Scedules --> */}

                    {/* <!-- Start: Menu Item Profile --> */}
                    <li>
                      <Link
                        href="/profile"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("profile") && "bg-graydark dark:bg-meta-4"
                          }`}
                      >
                        {/* profile icon */}
                        <ProfileIcon />
                        Profile
                      </Link>
                    </li>
                    {/* <!-- End: Menu Item Profile --> */}

                    {/* <!-- Start: Menu Item Infections --> */}
                    <li>
                      <Link
                        href="/infections"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("infections") &&
                          "bg-graydark dark:bg-meta-4"
                          }`}
                      >
                        {/* infections icon */}
                        <InfectionIcon />
                        Infections
                      </Link>
                    </li>
                    {/* <!-- End: Menu Item Infections --> */}

                    {/* <!-- Start: Menu Item Risk Factors --> */}
                    <li>
                      <Link
                        href="/risk_factors"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${pathname.includes("risk_factors") &&
                          "bg-graydark dark:bg-meta-4"
                          }`}
                      >
                        {/* risk factors */}
                        <RiskFactorsIcon />
                        Risk Factors
                      </Link>
                    </li>
                    {/* <!-- End: Menu Item Risk Factors --> */}
                  </ul>
                </div>
              </>)
          }

        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
