import Image from "next/image";
import React from "react";
import BlogCard from "./BlogCard";


const HeroBlog = async () => {
    const res = await fetch(
      "http://localhost:1337/api/blog-articles?populate=*"
    );
    const {data} = await res.json();


    

  return (
    <section className="p-8 lg:px-16">
      <h1 className="text-4xl font-bold text-green-600">Latest Blog Posts</h1>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.slice(0,3).map((item, i) => (
          <BlogCard item={item} key={i}/>
        ))}
      </div>
    </section>
  );
};

export default HeroBlog;
