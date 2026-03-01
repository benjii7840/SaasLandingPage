import React from "react";
import { data } from "../DataFile/data";
import { FaLongArrowAltRight } from "react-icons/fa";

const WhyUs = () => {
  return (
    <section className="mt-10 w-full h-auto  py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold font-bellefair-regular text-center mb-8">
          We help you build better products
        </h2>
        <p className="text-center text-gray-600 text-md">
          Why keep everything hidden home mrs. Considered sympathize ten
          <br></br> uncommonly occasional assistance sufficient.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mt-10">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-[#F5F8FF] p-6 rounded-lg shadow-md"
            >
              <img
                src={item.Image}
                alt={item.title}
                className="w-10 h-10 mb-4"
              />
              <h3 className="text-md font-bold font-Bellefair mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
              <button className="mt-2 bg-none  text-[#01966B] flex items-center gap-1 text-sm hover:underline hover:cursor-pointer">
                Read More
                <FaLongArrowAltRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
