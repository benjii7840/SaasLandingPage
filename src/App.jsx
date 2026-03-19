import React from "react";
import Navbar from "../components/Navbar";
import Homepage from "../components/Homepage";
import Sponsors from "../components/Sponsors";
import Whatwedo from "../components/Whatwedo";
import CTA from "../components/CTA";
import WhyUs from "../components/WhyUs";
import Appdownload from "../components/Appdownload";
import Blogpost from "../components/Blogpost";
import Connect from "../components/Connect";
import Footer from "../components/Footer";

const App = () => {
  return (
    <section className="w-full h-screen overflow-x-hidden ">
      <Navbar />
      <Homepage />
      <Sponsors />
      <Whatwedo />
      <CTA />
      <WhyUs />
      <Appdownload />
      <Blogpost />
      <Connect />
      <Footer />
    </section>
  );
};

export default App;
