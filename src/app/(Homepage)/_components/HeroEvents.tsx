import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";
import EventsCard from "./EventsCard";

const BASE_BACKEND_URL = "http://localhost:1337";

interface data {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: {
    url: string;
  };
}

const fetchData = async (): Promise<data[]> => {
  const response = await fetch(`https://revival-backend.onrender.com/api/events?populate=*`);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }
  return response.json() as data[];
};



const HeroEvents: React.FC = async () => {
  console.time();
  const { data } = await fetchData();
  return (
    <section className="p-8 lg:px-16">
      <h1 className="font-bold text-green-600">Upcoming Events</h1>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {data.slice(0, 2).map((item, i) => (
          <EventsCard key={i} item={item} />
        ))}
      </div>
    </section>
  );
};

export default HeroEvents;
