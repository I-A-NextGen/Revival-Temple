import Image from "next/image";
import React from "react";

const Herobenefits = () => {
  return (
    <div className="min-h-[512px] px-8 flex flex-col items-center md:flex-row py-16 md:px-16">
      <div className="h-full w-1/2 pr-32 flex flex-col gap-8">
        <h2 >
          Experience Community, Spiritual Growth, and Unwavering Support at
          Revival Temple
        </h2>
        <p >
          Joining Revival Temple means becoming part of a nurturing community
          that fosters spiritual growth and personal development. Here, you will
          find unwavering support as you embark on your journey of faith,
          surrounded by like-minded individuals dedicated to uplifting one
          another.
        </p>
      </div>
      <div className="w-1/2 min-h-[512px] relative">
        <Image src={"/WhatsApp Image 2024-12-05 at 11.40.45_569c9ec0.jpg"} alt="" className="object-cover rounded-2xl" fill/>
      </div>
    </div>
  );
};

export default Herobenefits;
