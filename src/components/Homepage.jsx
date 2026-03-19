import React from "react";

const Homepage = () => {
  return (
    <section className="w-full h-screen bg-[#F5F5F5] flex  justify-between">
      {/* Text on the left */}
      <div className="ml-20 mt-30">
        <h2 className=" text-black text-xl">
          Product Growth Solution in Single Platform.
        </h2>
        <p className="text-black font-extrabold font-Manrope text-4xl">
          Managing business<br></br> payments has never<br></br> been easier
        </p>
        <p className="pt-5 text-[#757095]">
          Never at water me might. On formed merits hunted unable<br></br>{" "}
          merely by mr whence or. Possession the unpleasing simplicity<br></br>{" "}
          her uncommonly.
        </p>
        <div className="bg-white w-100 h-18 mt-5 flex ">
          <div className="flex flex-col h-15">
            <p className="text-gray-500 text-sm font-semibold pt-5 pl-5">
              Register your email address
            </p>
            <p className="text-gray-500 text-sm font-bold pl-5">
              Shakir260@gmail.com
            </p>
          </div>
          <div className="ml-auto mr-4">
            <button className="bg-black text-white font-bold px-7 py-1  ml-auto mt-4 mr-4 h-11">
              Submit
            </button>
          </div>
        </div>
        <div>
          <img
            src="/Group-159.png"
            alt="checkpoint"
            className="w-50 h-50 object-contain"
          />
        </div>
      </div>

      {/* Image on the right */}
      <div className="flex justify-end">
        <img
          src="/homepage.png"
          alt="logo"
          className="w-160 h-160 object-contain"
        />
      </div>
    </section>
  );
};

export default Homepage;
