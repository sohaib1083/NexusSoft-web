import Hero from "@/components/Hero"; // If using `default export`

import FeatureCards from "./components/FeatureCards";
import CompanyValues from "./components/CompanyValues";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <FeatureCards />
      <CompanyValues />
    </div>
  );
}
