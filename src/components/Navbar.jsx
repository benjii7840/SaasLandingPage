import React, { useState } from "react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="flex bg-transparent">
      <img
        src="/AR-Shakir.png"
        alt="logo"
        className="ml-10 mt-5 w-20 h-5 mt-7"
      />
      <div className="flex gap-10 ml-70 mt-5 text-black-500 font-medium justify-center items-center">
        {/* Product Dropdown */}
        <div className="relative">
          <p
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => toggleDropdown("product")}
          >
            Product
            <span
              className={`text-xs transition-transform duration-200 ${openDropdown === "product" ? "rotate-180" : ""}`}
            >
              ▾
            </span>
          </p>
          {openDropdown === "product" && (
            <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md p-2 w-40 z-10">
              <p className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
                Features
              </p>
              <p className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
                Integrations
              </p>
              <p className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
                Changelog
              </p>
            </div>
          )}
        </div>

        {/* Template Dropdown */}
        <div className="relative">
          <p
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => toggleDropdown("template")}
          >
            Template
            <span
              className={`text-xs transition-transform duration-200 ${openDropdown === "template" ? "rotate-180" : ""}`}
            >
              ▾
            </span>
          </p>
          {openDropdown === "template" && (
            <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md p-2 w-40 z-10">
              <p className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
                Marketing
              </p>
              <p className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
                Business
              </p>
              <p className="px-3 py-2 hover:bg-gray-100 rounded cursor-pointer">
                Portfolio
              </p>
            </div>
          )}
        </div>

        <p>Blog</p>
        <p>Pricing</p>
      </div>
      <div>
        <button className="text-black px-4 py-2 rounded-md ml-40 mt-5 hover:bg-gray-200 transition duration-300">
          Sign In
        </button>
        <button className="bg-[#5D5FEF] text-white px-4 py-2 rounded-md ml-4 mt-5 hover:bg-[#4a4edb] transition duration-300">
          Start Free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
