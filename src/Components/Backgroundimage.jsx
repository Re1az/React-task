import React from "react";
import { IoLogoAndroid, IoLogoApple, IoLogoWindows } from "react-icons/io";
import { PiGreaterThanBold } from "react-icons/pi";

export default function Backgroundimage() {
  return (
    <div>
      <div className="hidden max-[1480px]:block relative top-0 ">
        <button className="flex justify-center w-full bg-[#4CAF50]/60 rounded-xs py-2 text-white/60 font-bold  hover:bg-[#CCCCCC] hover:text-black ">
          Download <IoLogoAndroid size={20} /> <IoLogoApple size={20} />
          <IoLogoWindows size={20} />
        </button>
      </div>
      <div className="bg-[url('https://www.w3schools.com/w3images/app.jpg')] h-250 bg-cover bg-no-repeat bg-center flex justify-between p-5 items-center text-white  max-sm:h-100 max-sm:relative ">
        <div className="container max-w-125 flex flex-col justify-center text-center gap-5 rounded-[8px] bg-black/60 px-10 py-6 hover:bg-black hover:text-white max-sm:hidden max-md:hidden max-[1480px]:hidden ">
          <h1 className="text-3xl text-white/70">Take photos with our app</h1>
          <hr />
          <p className="text-[18px] text-white/70">
            Super simple installment: free of charge
          </p>
          <button className=" flex justify-center items-center bg-[#4CAF50]/60 rounded-xs py-2 text-white/60 font-bold  hover:bg-[#CCCCCC] hover:text-black ">
            Download <IoLogoAndroid size={20} /> <IoLogoApple size={20} />
            <IoLogoWindows size={20} />
          </button>
        </div>

        <div>
          <button className="flex items-center gap-1 bg-black py-1 px-4 text-[18px] rounded-[5px] hover:bg-white hover:text-black max-sm:hidden max-md:hidden max-[1480px]:hidden">
            Take Tour <PiGreaterThanBold size={13} />{" "}
          </button>
        </div>
      </div>
      <div className="hidden max-[1480px]:block relative bottom-0 text-white">
        <button className=" w-full flex justify-center items-center gap-1 bg-black py-1 px-4 text-[18px]  hover:bg-white hover:text-black">
          Take Tour <PiGreaterThanBold size={13} />{" "}
        </button>
      </div>
    </div>
  );
}
