import React from "react";
import Pricesection from "./Pricesection"; // your table component

export default function Pricing() {
  return (
    <section className="px-5 py-15">
      <h1 className="text-5xl font-bold mb-4 text-center">Pricing</h1>
      <p className="text-center mb-12">
        Choose a pricing plan that fits your needs.
      </p>
      <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1 max-md:grid-cols-1">
        <Pricesection
          title="Basic"
          plandiscription={[
            "250 Photos",
            "10 Features",
            "No Ads",
            "Office hours Support",
            "$ 25",
          ]}
          bgColor="bg-[#616161]"
        />
        <Pricesection
          title="Premium"
          plandiscription={[
            "1000 Photos",
            "50 Features",
            "No Ads",
            "Endless Support",
            "$ 99",
          ]}
          bgColor="bg-red-500"
        />
      </div>
    </section>
  );
}
