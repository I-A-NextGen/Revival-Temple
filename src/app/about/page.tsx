import Image from "next/image";
import React from "react";
import { Card } from "~/components/ui/card";

const page = () => {
  return (
    <section className="min-h-screen w-full py-16">
      <div className="grid min-h-96 content-center gap-8 bg-gradient-to-tr from-green-600 to-green-500 px-8 text-white md:px-16">
        <h1>Hope and Restoration</h1>
        <p className="w-1/3">
          Revival Temple is dedicated to spreading hope and love through the
          transformative power of the Gospel.
        </p>
      </div>
      <div className="relative min-h-[512px] w-full">
        <Image
          src={"/WhatsApp Image 2024-12-05 at 11.40.45_569c9ec0.jpg"}
          alt=""
          className="object-cover"
          fill
        />
      </div>
      <div className="flex w-full flex-col justify-between gap-8 p-8 md:px-16">
        <div className="flex w-full flex-row justify-between gap-8 pt-16">
          <h2 className="w-1/2">
            The Inspiring Journey of Revival Temple: A Testament to Faith and
            Hope
          </h2>
          <div className="w-1/2">
            Revival Temple was born from a vision in 2012, driven by name
            Gatete's faith after surviving the Luwero Triangle Civil War. In
            2003, the church was established in Kigali, Rwanda, aiming to spread
            hope and restore lives through the Gospel. Over the years, we have
            committed to building a model church rooted in biblical teachings
            and fostering strong leadership.
          </div>
        </div>
        <iframe
          className="min-h-[720px] rounded-2xl"
          src="https://www.youtube.com/embed/UuuZMg6NVeA"
          title='Hezekiah Walker New Video "Every Praise"'
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex flex-col p-8 md:flex-row md:px-16">
        <div className="grid min-h-[512px] w-full content-center gap-4 px-4 md:w-1/2">
          <h1>Our Mission</h1>
          <p>
            Our mission is to spread hope and love through the transformative
            power of the Gospel.
          </p>
        </div>
        <div className="relative w-full md:w-1/2">
          <Image
            src={"/WhatsApp Image 2024-12-05 at 11.40.45_569c9ec0.jpg"}
            className="min-h-[512px] object-cover"
            alt=""
            fill
          />
        </div>
      </div>
      <div className="flex flex-col p-8 md:flex-row-reverse md:px-16">
        <div className="grid min-h-[512px] w-full content-center gap-4 px-4 md:w-1/2">
          <h1>Our Vision</h1>
          <p>
            Our Vision is to spread hope and love through the transformative
            power of the Gospel.
          </p>
        </div>
        <div className="relative w-full md:w-1/2">
          <Image
            src={"/WhatsApp Image 2024-12-05 at 11.40.45_569c9ec0.jpg"}
            className="min-h-[512px] object-cover"
            alt=""
            fill
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 p-8 px-16">
        <h1>Meet our team</h1>

        <div className="grid grid-cols-4 gap-4">
          {[0, 1, 2, 3].map((person, i) => (
            <Card className="group relative min-h-[512px] overflow-clip rounded-2xl" key={i}>
              <div className="absolute -bottom-16 left-0 z-20 w-full px-8 text-white duration-500 group-hover:bottom-8">
                <h4>Name</h4>
                <p>Name</p>
              </div>
              <div className="absolute z-10 size-full bg-gradient-to-b from-transparent to-black" />
              <Image
                src={"/WhatsApp Image 2024-12-05 at 11.40.45_569c9ec0.jpg"}
                className="object-cover"
                alt=""
                fill
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
