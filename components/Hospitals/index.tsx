import { HOSPITAL } from "@/types/hospital";

const hospitalData: HOSPITAL[] = [
  {
    name: "Mulago National Referral",
    type: "NR Hospital",
    ownership: "Government",
    district: "Kampala",
    location: "0.3323, 32.3323",
  },
  {
    name: "Mengo",
    type: "GR Hospital",
    ownership: "Government",
    district: "Kampala",
    location: "0.3023, 30.3023",
  },
  {
    name: "Jinja Regional Referral",
    type: "RR Hospital",
    ownership: "Prison",
    district: "Jinja",
    location: "0.2423, 2223",
  },
];

const Hospitals = () => {
  return (
    <div className="rounded-lg border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl text-center font-semibold text-black dark:text-white">
        Partner Hospitals
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-lg bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Type
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Ownership
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              District
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Location
            </h5>
          </div>
        </div>

        {hospitalData.map((hospital, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === hospitalData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="hidden text-black dark:text-white sm:block">
                {hospital.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{hospital.type}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{hospital.ownership}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{hospital.district}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{hospital.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hospitals;
