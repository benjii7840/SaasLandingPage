import React from "react";
import Navbar from "../components/Navbar";
import Homepage from "../components/Homepage";
import Sponsors from "../components/Sponsors";
import Whatwedo from "../components/Whatwedo";
import CTA from "../components/CTA";

const App = () => {
  return (
    <section className="w-full h-screen bg-[#E5E5E5] ">
      <Navbar />
      <Homepage />
      <Sponsors />
      <Whatwedo />
      <CTA />
    </section>
  );
};

export default App;
