import React from "react";
import BlogCard from "../(Homepage)/_components/BlogCard";
import Footer from "../(Homepage)/_components/Footer";

const page = async () => {
  const res = await fetch("https://revival-backend.onrender.com/api/blogs?populate=*");
  const { data } = await res.json();
  return (
    <section>
      <div className="pt-16">
        <div className="min-h-56 bg-green-500 flex items-center justify-center flex-col gap-2 text-white">
          <h1>Latest Blog Posts</h1>
          <p>
            Read our latest blog posts and updates about the Revival Temple.
          </p>
        </div>
        <div className="px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 gap-4">
          {data.map((item: typeof data[number], i: number) => (
            <BlogCard item={item} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
