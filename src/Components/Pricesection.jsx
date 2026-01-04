import React from "react";
import { FaDownload } from "react-icons/fa";

export default function Pricesection({ title, plandiscription, bgColor }) {
  return (
    <>
      <table className="w-full bg-white text-black shadow-2xl hover:shadow-black/50">
        <thead className={`h-25 text-center text-3xl text-white ${bgColor}`}>
          <tr>
            <td>{title}</td>
          </tr>
        </thead>
        <tbody className="text-center">
          {plandiscription.map((item, index) => {
            const [firstWord, ...rest] = item.split(" ");
            const restText = rest.join(" ");
            // const isPrice = index === plandiscription.length - 1;
            return (
              <tr
                key={index}
                className="border-b border-gray-300 last:border-0"
              >
                <td className="py-4 px-6">
                  <span className="font-bold">{firstWord}</span>{" "}
                  <span>{restText}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot className="bg-[#F1F1F1] ">
          <tr>
            <td className="py-8">
              <button className="bg-black text-white px-8 py-3 rounded flex items-center gap-2 mx-auto hover:bg-[#cccc] hover:text-black">
                <FaDownload /> Download
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
