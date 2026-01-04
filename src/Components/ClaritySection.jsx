import React from "react";

export default function ClaritySection() {
  return (
    <section className="bg-[#F1F1F1] py-15 px-5 flex justify-between gap-5 max-sm:p-5 ">
      <div>
        <img
          className="max-w-100  rounded-xl grayscale-80 max-sm:hidden max-[745px]:hidden"
          src="https://www.w3schools.com/w3images/app5.jpg"
          alt="mobile camera-ready to capture"
        />
      </div>
      <div className="max-w-240  flex flex-col gap-5 justify-baseline text-left">
        <div className="flex flex-col gap-5">
          <h1 className="text-7xl font-bold">Clarity</h1>
          <h2 className="text-5xl font-bold text-[#F44336]">Pixels, who?</h2>
        </div>
        <p className="text-[18px]">
          <span className="text-2xl font-medium">
            A revolution in resolution.
          </span>
          Sharp and clear photos with the world's best photo engine, incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </section>
  );
}
