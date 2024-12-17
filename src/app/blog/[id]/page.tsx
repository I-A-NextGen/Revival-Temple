import Image from "next/image";
import React from "react";
import ReactMarkdown from 'react-markdown'

type PageProps = {
  params: {
    id: string;
  };
};

interface Article {
  Title: string;
  FeaturedImage: {
    url: string;
  };
  Author: string;
  Content: string;
}



const baseurl = "http://localhost:1337";

const page = async ({ params }: PageProps) => {
  const {id} = await params;
  const res = await fetch(
    `https://revival-backend.onrender.com/api/blogs?filters[slug][$eq]=${id}&populate=*`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = (await res.json()) as { data: Article[] };

  if (data.data.length === 0) {
    return (
      <div className="grid min-h-screen place-items-center text-5xl">
        No article found
      </div>
    );
  }

  const articles = data.data[0];

  return (
    <div>
      <div className="relative flex min-h-96 w-full items-center justify-center">
        <Image
          src={`${articles?.banner.url}`}
          alt=""
          className="object-cover"
          fill
        />
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-green-700 to-transparent"></div>
        <div className="relative z-10 flex flex-col gap-8 p-8 text-center text-white">
          <h2 className="">{articles?.title}</h2>
          <h4 className="font-thin">{articles?.author}</h4>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center items-center gap-8">
        {/* <h3>Summary</h3> */}
        <ReactMarkdown className={"prose my-32"}>{articles?.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default page;

