import React from "react";
import { Button } from "~/components/ui/button";

const Hero = () => {
  return (
    <section className="relative mt-16 min-h-screen w-full">
      <div className="absolute z-20 size-full bg-gradient-to-b from-transparent to-black" />
      <div>
        <div className="absolute bottom-60 left-24 z-20 mx-auto w-1/3 max-w-7xl px-4 sm:px-6">
          <h1 className="text-7xl font-bold text-green-500">
            Welcome to Revival Temple: A Place of Hope
          </h1>
          <p className="mt-6 text-lg text-white">
            At Revival Temple, we are dedicated to spreading the transformative
            power of the Gospel, fostering love and hope within our communities.
            Join us in our mission to restore lives and build a brighter future
            through faith and fellowship.
          </p>
          <Button className="mt-8 bg-green-600 px-8">Learn more</Button>
        </div>
      </div>
      <video
        className="absolute h-full w-full object-cover"
        autoPlay
        muted={true}
        loop
      >
        <source
          src="/videos/WhatsApp Video 2024-12-03 at 15.33.58_b608a00f.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Hero;
