import React from "react";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Feed from "../components/Feed";
import RightLinks from "../components/RightLinks";

const Home = () => {
  return (
    <div>
      {/* Mobile Layout  */}
      <div className="block md:hidden">
        <Hero />
        <Sidebar />
        <Feed />
        <Footer />
      </div>

      {/* Desktop Layout  */}
      <div className="hidden md:flex md:flex-row min-h-screen">
        {/* Sidebar left */}
        <div className="w-[305px] mt-4">
          <Sidebar />
        </div>

        {/* Divider */}
        <div className="border-l-[1px] border-[#dfe4e9] "></div>
        {/* Main Content right */}
        <div className="flex-1 flex flex-col w-full md:w-[470px] max-w-[1280px] mx-auto">
          <Hero />
          <Feed />
          <Footer />
        </div>
        <div className="w-[280px] mr-6 hidden xl:block">
          <RightLinks />
        </div>
      </div>
    </div>
  );
};

export default Home;
