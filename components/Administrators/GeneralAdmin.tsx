import { GENERALADMIN } from "@/types/generalAdmin";
import Image from "next/image";

const adminData: GENERALADMIN[] = [
  {
    avatar: "/images/brand/brand-01.svg",
    title: "General Doctor",
    name: "Daniel Ongom",
    email: "ongomdaniel@gdci-lab.net",
    hospital: "Mulago",
  },
  {
    avatar: "/images/brand/brand-02.svg",
    title: "Neurologist",
    name: "Bukenya Luqman",
    email: "bukenyaluqman@gdci-lab.net",
    hospital: "Mengo",
  },
  {
    avatar: "/images/brand/brand-03.svg",
    title: "Pulmonologist",
    name: "Ainekirabo Mbabazi",
    email: "ainekirabombabazi@gdci-lab.net",
    hospital: "Jinja Referral",
  },
];

const GeneralAdmin = () => {
  return (
    <div className="rounded-lg border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl text-center font-semibold text-black dark:text-white">
        Top Administrators
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-lg bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Avatar
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Full Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Title
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Email
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Hospital
            </h5>
          </div>
        </div>

        {adminData.map((admin, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === adminData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <Image src={admin.avatar} alt="Admin" width={48} height={48} />
              </div>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{admin.name}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{admin.title}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{admin.email}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{admin.hospital}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralAdmin;
