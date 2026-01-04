import React from "react";
import {
  IoIosDownload,
  IoLogoAndroid,
  IoLogoApple,
  IoLogoWindows,
  IoMdArrowDown,
  IoMdCloudDownload,
  IoMdCodeDownload,
  IoMdDownload,
} from "react-icons/io";
export default function Theapp() {
  return (
    <section className="py-15 px-5 flex justify-between gap-10   max-sm:flex-col-reverse max-sm:items-center">
      <div className="max-w-240  flex flex-col gap-5 max-sm:w-fit max-sm:px-5 max-sm:text-center   ">
        <h1 className="text-6xl font-bold">The App</h1>
        <h2 className="text-5xl font-bold text-[#4CAF50]">Why buy it?</h2>
        <p className="text-[18px] text-left ">
          <span className="text-2xl font-medium">Take photos like a pro.</span>{" "}
          You should buy this app because lorem ipsum consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className="flex max-sm:justify-center">
          <button className="bg-[#f1f1f1] flex px-3 py-3 items-center hover:bg-[#CCCCCC]">
            <IoMdDownload /> Download Application
          </button>
        </div>

        <p className="flex py-2 items-center text-[15px] max-sm:justify-center">
          Available for <IoLogoAndroid size={30} color="#4CAF50" />
          <IoLogoApple size={30} /> <IoLogoWindows size={30} color="#2196F3" />
        </p>
      </div>
      <div className="">
        <img
          className="max-w-75 max-h-100 max-sm:"
          src="https://www.w3schools.com/w3images/img_app.jpg"
          alt="screenshot"
        />
      </div>
    </section>
  );
}
