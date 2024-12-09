import Image from "next/image";
import React from "react";
import { Button } from "~/components/ui/button";

const HeroSection = () => {
  return (
    <div className="grid min-h-screen grid-cols-2 grid-rows-2 gap-2 p-8 md:px-16">
      <div className="col-span-2 flex flex-col items-center justify-center gap-4 rounded-3xl bg-gradient-to-tr from-green-500 to-green-700 text-white">
        <h1 className="text-center text-5xl font-bold">
          Welcome to Our Church
        </h1>
        <p className="text-center text-xl">
          We believe in unity, love, and forgiveness. Come join us today!
        </p>
      </div>
      <div className="relative rounded-3xl overflow-clip min-h-[456px]">
        <div className="absolute z-10 size-full bg-gradient-to-b from-transparent to-black" />

        <div className="absolute bottom-8 flex flex-col gap-2 left-8 text-white z-20">
          <h3 className="p-2 bg-white/20 px-4 w-fit rounded-full">FEATURED DEVOTIONAL</h3>
          <h2 className="text-4xl">Feelings dont have to rule your life</h2>
          <p>Sunday, June 17th, 7pm</p>
          <p>This event is open to all students and families.</p>
          <Button variant={"gooeyRight"} className="w-fit from-green-400 rounded-full px-8 bg-green-700">
            Learn more
          </Button>
        </div>
        <Image
          className="h-full w-full object-cover object-center"
          src="https://i.pinimg.com/736x/78/df/fc/78dffc8b6db265a90e4130b0aa7054a1.jpg"
          fill
          alt="Hero Image"
        />
      </div>
      <div className="relative rounded-3xl overflow-clip min-h-[456px]">
        <div className="absolute z-10 size-full bg-gradient-to-b from-transparent to-black" />

        <div className="absolute bottom-8 flex flex-col gap-2 left-8 text-white z-20">
          <h3 className="p-2 bg-white/20 px-4 w-fit rounded-full">Next event</h3>
          <h2 className="text-4xl">High School Bible Study</h2>
          <p>Sunday, June 17th, 7pm</p>
          <p>This event is open to all students and families.</p>
          <Button variant={"gooeyRight"} className="w-fit from-green-400 rounded-full px-8 bg-green-700">
            Learn more
          </Button>
        </div>
        <Image
          className="h-full w-full object-cover"
          src="https://i.pinimg.com/736x/3f/67/47/3f67478a097013d70b3cc91dc99a1646.jpg"
          fill
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
