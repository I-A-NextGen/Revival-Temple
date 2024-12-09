import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";

const baseurl = "http://localhost:1337/"

interface Item {
    id: number;
    Title: string;
    content: string;
    Author: string;
    Content: string;
    slug: string;
    FeaturedImage: {
        url: string;
    };
}

interface ItemProps {
    item: Item; 
}

const BlogCard = ({ item }: ItemProps) => {

  return (
    <div className="relative rounded-2xl overflow-clip min-h-[512px]">
      <div className="absolute z-20 size-full bg-gradient-to-b from-transparent from-45% to-green-950" />
      <Image
        className="-z-10 h-64 w-full object-cover"
        src={ `${baseurl}${item.FeaturedImage.url}` || "/WhatsApp Image 2024-12-05 at 11.40.45_569c9ec0.jpg"}
        alt="Blog Post"
        fill
      />
      <div className="absolute bottom-6 left-0 z-30 rounded-lg px-8 flex flex-col gap-4 text-white">
        <h3>{item.Title || "No content available."}</h3>
        <h5>{item.Author || "No content available."}</h5>
        <p className="text-white">
          {item.Content || "No content available."}
        </p>
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
