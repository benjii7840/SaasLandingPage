import React from "react";
import { FaLinkedin, FaFacebookMessenger, FaXTwitter } from "react-icons/fa6";
import { SiFlickr } from "react-icons/si";

const Footer = () => {
  return (
    <footer className=" py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">AR Shakir</h3>
            <p className="text-gray-600 mb-6">
              Simple innate summer fat appear basket his desire joy.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 text-2xl">
              <a
                href="#"
                className="text-blue-700 hover:text-blue-800 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-700 transition"
              >
                <FaFacebookMessenger />
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 transition"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="text-pink-500 hover:text-pink-600 transition"
              >
                <SiFlickr />
              </a>
            </div>
          </div>

          {/* Column 2 - Company */}
          <div>
            <h4 className="text-xl font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Resources */}
          <div>
            <h4 className="text-xl font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Templates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Free resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition"
                >
                  Contract templates
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          {/* Column 4 - Newsletter */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-6">
              Join Our Newsletter
            </h4>

            {/* Stack vertically on all screens */}
            <div className="flex flex-col gap-2 mb-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-cyan-400 transition text-sm"
              />
              <button className="w-full px-6 py-3 bg-cyan-400 text-white font-semibold rounded-lg hover:bg-cyan-500 transition text-sm">
                Subscribe
              </button>
            </div>

            <p className="text-xs sm:text-sm text-gray-500">
              * Will send you weekly updates for your better finance management.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 pt-8">
          <p className="text-center text-gray-600">
            Copyright @ AR Shakir 2022. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
