import React from "react";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Appdownload = () => {
  return (
    <section className="mt-20 flex justify-center items-center">
      <div>
        <h2 className=" text-sm font-bellefair-regular text-[#5D5FEF] mb-4 text-center uppercase">
          Project Management App
        </h2>
        <p className="font-bold text-3xl text-center">
          Download our app and start your free<br></br> trail to get started
          today!
        </p>
        <p className="text-center mt-4 text-gray-600 text-md">
          End-to-end payments and financial management in a single solution.
        </p>
        <div>
          <div className="flex justify-center mt-6 gap-4">
            <button className="bg-[#5D5FEF] text-white px-4 py-2 rounded-md ml-4 mt-5 mb-5 hover:bg-[#4a4edb] transition duration-300 flex items-center gap-2">
              <FaApple />
              Play Store
            </button>
            <button className="bg-[#5D5FEF] text-white px-4 py-2 rounded-md ml-4 mt-5 mb-5 hover:bg-[#4a4edb] transition duration-300 flex items-center gap-2">
              <FaGooglePlay />
              App Store
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appdownload;
