import React from "react";
import BlogCard from "../(Homepage)/_components/BlogCard";
import Footer from "../(Homepage)/_components/Footer";
import { Card } from "~/components/ui/card";

const page = async () => {
  const res = await fetch("http://localhost:1337/api/events?populate=*");
  const { data } = await res.json();
  return (
    <>
      <div className="pt-16">
        <div className="min-h-56 bg-green-500 flex items-center justify-center flex-col gap-2 text-white">
          <h1>Latest events Posts</h1>
          <p>
            Read our latest events and updates about the Revival Temple.
          </p>
        </div>
        <div className="px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-4">
          {
            data.map((event: { Title: string ; DateTime: Date; Image: { url: string; }; },i: React.Key) => (
                <Card key={i} className="p-4 flex flex-col gap-4">
                    <h4>{event.Title}</h4>
                    <span>{new Date(event.DateTime).toLocaleDateString()}</span>
                    <img src={ "http://localhost:1337/" + event.Image.url} alt="" className="h-96 rounded-2xl w-full" />
                </Card>
            ))
          }
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default page;
