import React from "react";

const CTA = () => {
  return (
    <section className="mt-10 flex items-center justify-center mb-10">
      <div>
        <div className="relative h-64 w-140 rounded-lg mb-10 bg-center bg-cover bg-[url('/assets/handshake.jpg')]">
          {/* Dark overlay - adjust opacity */}
          <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
            <h1 className="text-2xl text-white font-semibold mb-4">
              Push your product to the next level
            </h1>
            <p className="text-white mb-6">
              End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
            </p>
            <button className="px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-blue-700 transition duration-300 font-semibold">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;