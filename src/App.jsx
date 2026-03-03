import React from "react";
import Navbar from "../components/Navbar";
import Homepage from "../components/Homepage";
import Sponsors from "../components/Sponsors";
import Whatwedo from "../components/Whatwedo";
import CTA from "../components/CTA";
import WhyUs from "../components/WhyUs";
import Appdownload from "../components/appdownload";
import Blogpost from "../components/Blogpost";

const App = () => {
  return (
    <section className="w-full h-screen bg-[#E5E5E5] ">
      <Navbar />
      <Homepage />
      <Sponsors />
      <Whatwedo />
      <CTA />
      <WhyUs />
      <Appdownload />
      <Blogpost />
    </section>
  );
};

export default App;
