import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaSnapchatSquare,
} from "react-icons/fa";
import {
  FaLinkedin,
  FaPinterest,
  FaSnapchat,
  FaTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-5 py-15 bg-[#F1F1F1] ">
      <div className="flex gap-2">
        <FaFacebookSquare size={30} />
        <FaInstagramSquare size={30} />
        <FaSnapchatSquare size={30} />
        <FaPinterest size={30} />
        <FaTwitter size={30} />
        <FaLinkedin size={30} />
      </div>
      <p>
        Powered by &nbsp;
        <a
          className="underline"
          href="https://www.w3schools.com/w3css/default.asp"
        >
          w3.css
        </a>
      </p>
    </footer>
  );
}
