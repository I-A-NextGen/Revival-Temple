import Image from "next/image";
import Link from "next/link";
import React from "react";

const baseurl = "http://localhost:1337/";

interface Item {
  id: number;
  Title: string;
  DateTime: string;
  Location: string;
  Description: string;
  slug: string;
  Image: {
    url: string;
  };
}

interface ItemProps {
  item: Item;
}

const EventsCard = ({ item }: ItemProps) => {
  return (
    <div
      className="group relative min-h-[512px] overflow-clip rounded-2xl"
    >
      <div className="absolute z-0 size-full bg-gradient-to-b from-transparent to-black" />

      <Image
        src={baseurl + item.Image.url}
        alt=""
        fill
        className="-z-20 object-cover duration-500 group-hover:scale-110"
      />
      <div className="group absolute bottom-8 left-8 z-10 flex flex-col gap-4 text-white">
        <h2 className="font-bold text-green-500">{item.Title}</h2>
        <h6 className="w-2/3 font-semibold">{item.Location}</h6>
        <p className="line-clamp-2 w-2/3">{item.Description}</p>
        <p className="w-fit rounded-xl bg-white/20 p-2 px-4 backdrop-blur-sm">
          {new Date(item.DateTime).toLocaleDateString()}
        </p>
        <p className="">
          Register
          <Link
            href={""}
            className="underline duration-500 group-hover:text-green-500"
          >
            {" "}
            Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default EventsCard;
