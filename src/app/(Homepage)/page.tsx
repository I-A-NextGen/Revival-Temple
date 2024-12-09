import React from "react";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import HeroSection from "./_components/HeroSection";
import Herofeatures from "./_components/Herofeatures";
import Footer from "./_components/Footer";
import Herobenefits from "./_components/Herobenefits";
import HeroBlog from "./_components/HeroBlog";
import HeroEvents from "./_components/HeroEvents";

const page = async () => {

  return (
    <div className="font-dmsans">
      <main className="">
        <Hero />
        <Herobenefits />
        <HeroEvents />
        <HeroSection />
        <Herofeatures />
        <HeroBlog />
      </main>
      <Footer />
    </div>
  );
};

export default page;
