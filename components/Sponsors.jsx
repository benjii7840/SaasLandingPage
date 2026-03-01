import React from "react";

const Sponsors = () => {
  return (
    <div className=" h-20 bg-white flex flex-col items-center justify-center">
      <p className="text-gray-500 text-sm font-semibold mt-10">
        Over 32k+ software businesses growing with AR Shakir
      </p>
      <img
        src="/assets/logos.png"
        alt="partners logos"
        className="w-250 h-10 object-contain w-60 h-5 mt-5"
      />
    </div>
  );
};

export default Sponsors;
