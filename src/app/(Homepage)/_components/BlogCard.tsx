import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";

interface Item {
    id: number;
    title: string;
    content: string;
    author: string;
    Content: string;
    slug: string;
    banner: {
        url: string;
    };
    createdAt:string
}

interface ItemProps {
    item: Item; 
}

const BlogCard = ({ item }: ItemProps) => {
  

  return (
    <div className="relative rounded-2xl overflow-clip min-h-[512px]">
      <div className="absolute z-20 size-full bg-gradient-to-b from-transparent from-25% to-green-950" />
      <Image
        className="-z-10 h-64 w-full object-cover"
        src={ `${item.banner.url}` || "/WhatsApp Image 2024-12-05 at 11.40.45_569c9ec0.jpg"}
        alt="Blog Post"
        fill
      />
      <div className="absolute bottom-6 left-0 z-30 rounded-lg px-8 flex flex-col gap-2 text-white">
        <h3>{item.title || "No content available."}</h3>
        <h5>{item.author || "No content available."}</h5>
        <span className="text-lg my-2">{new Date(item.createdAt).toLocaleDateString()}</span>
        <Button
          asChild
          variant={"gooeyRight"}
          className="bg-green-700 w-fit from-green-500"
        >
          <Link href={`/blog/${item.slug}`}>Read More</Link>
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
