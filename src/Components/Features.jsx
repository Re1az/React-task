import React from "react";
import {
  FaBatteryFull,
  FaBoltLightning,
  FaCamera,
  FaCloud,
  FaDiamond,
  FaDiamondTurnRight,
  FaEarthAfrica,
  FaEarthAmericas,
  FaEarthAsia,
  FaEarthEurope,
  FaEarthOceania,
  FaFloppyDisk,
  FaGlobe,
  FaHardDrive,
  FaHeart,
  FaImage,
  FaShield,
  FaUser,
  FaWifi,
} from "react-icons/fa6";
import { IoDiamondOutline } from "react-icons/io5";

export default function Features() {
  return (
    <section className="bg-[#616161] py-15 px-5">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold">Features</h1>
        <p className="mt-8 text-[15px] font-medium">
          This app is just so lorem ipsum.
        </p>
      </div>
      <div className="hidden max-[700px]:grid grid-cols-3 p-5 place-items-center justify-items-center max-sm:grid-cols-3 max-sm:gap-20">
        <div className="text-white place-items-center ">
          <FaBoltLightning size={40} color="orange" />
          <p className="text-center mt-3 font-medium">Fast</p>
        </div>
        <div className="text-white place-items-center">
          <FaHeart size={40} color="#F44336" />
          <p className="text-center mt-3 font-medium">Loved</p>
        </div>
        <div className="text-white place-items-center">
          <FaCamera size={40} color="#D2BE0E" />
          <p className="text-center mt-3 font-medium">Clarity</p>
        </div>
        <div className="text-white place-items-center">
          <FaBatteryFull size={40} color="#4CAF50" />
          <p className="text-center mt-3 font-medium">Power</p>
        </div>
        <div className="text-white place-items-center">
          <IoDiamondOutline size={40} color="white" />
          <p className="text-center mt-3 font-medium">Sharp</p>
        </div>
        <div className="text-white place-items-center">
          <FaCloud size={40} color="#2196F3" />
          <p className="text-center mt-3 font-medium">Cloud</p>
        </div>
        <div className="text-white place-items-center">
          <FaEarthAmericas size={40} color="#FFC107" />
          <p className="text-center mt-3 font-medium">Global</p>
        </div>

        <div className="text-white place-items-center">
          <FaHardDrive size={40} color="#00BCD4" />
          <p className="text-center mt-3 font-medium">Storage</p>
        </div>
        <div className="text-white place-items-center">
          <FaUser size={40} color="white" />
          <p className="text-center mt-3 font-medium">Safe</p>
        </div>
        <div className="text-white place-items-center">
          <FaShield size={40} color="#FF9800" />
          <p className="text-center mt-3 font-medium">Stabile</p>
        </div>
        <div className="text-white  place-items-center">
          <FaWifi size={40} color="#757575" />
          <p className="text-center mt-3 font-medium">Connected</p>
        </div>
        <div className="text-white place-items-center">
          <FaImage size={40} color="#E91E63" />
          <p className="text-center mt-3 font-medium">HD</p>
        </div>
      </div>

      <div className="max-sm:hidden max-[700px]:hidden grid grid-cols-4 p-10 place-items-center gap-35 max-sm:grid-cols-3 max-sm:gap-20">
        <div className="text-white">
          <FaBoltLightning size={70} color="orange" />
          <p className="text-center mt-3 font-medium">Fast</p>
        </div>
        <div className="text-white">
          <FaHeart size={70} color="#F44336" />
          <p className="text-center mt-3 font-medium">Loved</p>
        </div>
        <div className="text-white">
          <FaCamera size={70} color="#D2BE0E" />
          <p className="text-center mt-3 font-medium">Clarity</p>
        </div>
        <div className="text-white">
          <FaBatteryFull size={70} color="#4CAF50" />
          <p className="text-center mt-3 font-medium">Power</p>
        </div>
        <div className="text-white">
          <IoDiamondOutline size={70} color="white" />
          <p className="text-center mt-3 font-medium">Sharp</p>
        </div>
        <div className="text-white">
          <FaCloud size={70} color="#2196F3" />
          <p className="text-center mt-3 font-medium">Cloud</p>
        </div>
        <div className="text-white">
          <FaEarthAmericas size={70} color="#FFC107" />
          <p className="text-center mt-3 font-medium">Global</p>
        </div>

        <div className="text-white">
          <FaHardDrive size={70} color="#00BCD4" />
          <p className="text-center mt-3 font-medium">Storage</p>
        </div>
        <div className="text-white">
          <FaUser size={70} color="white" />
          <p className="text-center mt-3 font-medium">Safe</p>
        </div>
        <div className="text-white">
          <FaShield size={70} color="#FF9800" />
          <p className="text-center mt-3 font-medium">Stabile</p>
        </div>
        <div className="text-white">
          <FaWifi size={70} color="#757575" />
          <p className="text-center mt-3 font-medium">Connected</p>
        </div>
        <div className="text-white">
          <FaImage size={70} color="#E91E63" />
          <p className="text-center mt-3 font-medium">HD</p>
        </div>
      </div>
    </section>
  );
}
