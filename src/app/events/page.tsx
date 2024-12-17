import React from "react";
import BlogCard from "../(Homepage)/_components/BlogCard";
import Footer from "../(Homepage)/_components/Footer";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import Link from "next/link";

const page = async () => {
  const res = await fetch("https://revival-backend.onrender.com/api/events?populate=*");
  const { data } = await res.json();
  return (
    <section>
      <div className="pt-16">
        <div className="min-h-56 bg-green-500 flex items-center justify-center flex-col gap-2 text-white">
          <h1>Latest events Posts</h1>
          <p>
            Read our latest events and updates about the Revival Temple.
          </p>
        </div>
        <div className="px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-4">
          {
            data.map((event: { Title: string ; createdAt: Date; Image: { url: string; }; },i: React.Key) => (
                <Card key={i} className="p-4 flex flex-col border-2 border-green-500">
                    <h4 className="text-3xl">{event.title}</h4>
                    <img src={event.banner.url} alt="" className="h-96 mt-8 rounded-xl w-full" />
                    <span className="text-lg my-2">{new Date(event.createdAt).toLocaleDateString()}</span>
                    <p>{event.description}</p>
                    <Button asChild variant={"gooeyLeft"} className="bg-green-500 my-2 from-green-700">
                      <Link href={"events/"+event.slug} className="text-lg capitalize">
                      see more
                      </Link>
                    </Button>
                </Card>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default page;
