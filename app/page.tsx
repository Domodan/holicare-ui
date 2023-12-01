import Dashboard from "@/components/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HoliCare | Healthcare Diagnostics Tool",
  description:
    "HoliCare: A Holistic Approach in Patient Management and Epidemic Surveillance Through Convergence of Dignostic Technologies, Capacity Building, and Stakeholder Management.",
  // other metadata
};

export default function Home() {
  return <Dashboard />;
}
