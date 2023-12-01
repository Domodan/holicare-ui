import { DISTRICT } from "@/types/districts";

const districtData: DISTRICT[] = [
  {
    name: "Kampala",
    region: "Central",
    population: "2107500",
    created: "2023-04-26T16:13:00",
    updated: "2023-04-26T16:13:00",
  },
  {
    name: "Wakiso",
    region: "Central",
    population: "1529400",
    created: "2023-04-26T16:13:00",
    updated: "2023-04-26T16:13:00",
  },
  {
    name: "Jinja",
    region: "Eastern",
    population: "226800",
    created: "2023-04-26T16:13:00",
    updated: "2023-04-26T16:13:00",
  },
  {
    name: "Mukono",
    region: "Central",
    population: "610200",
    created: "2023-04-26T16:13:00",
    updated: "2023-04-26T16:13:00",
  },
];

const Districts = () => {
  return (
    <div className="rounded-lg border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl text-center font-semibold text-black dark:text-white">
        Districts of Interest
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
              Region
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Population
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Date Created
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Date Updated
            </h5>
          </div>
        </div>

        {districtData.map((district, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === districtData.length - 1
                ? ""
                : "border-b border-stroke dark:border-strokedark"
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="hidden text-black dark:text-white sm:block">
                {district.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{district.region}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{district.population}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{district.created}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{district.updated}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Districts;
