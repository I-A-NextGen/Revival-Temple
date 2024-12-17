import React from "react";
import { Button } from "~/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Blog", href: "/blog" },
  ];
  return (
    <nav className="flex fixed w-full top-0 z-50 bg-white items-center justify-between px-8 py-4 border-b-2 border-green-600 md:px-16">
        <Button className="" variant={"secondary"} asChild>
            <Link href="/" className="">
              <img className="h-12 w-auto" src="/logo.png" alt="Logo" />
            </Link>
        </Button>
      <div className="flex items-center">
        {links.map((link, index) => (
          <Button size={"sm"} variant={"link"} key={index} className="hover:text-green-600" asChild>
            <Link href={link.href}>{link.name}</Link>
          </Button>
        ))}
        <Button asChild variant={"gooeyLeft"} className="bg-green-700 ml-2 from-green-400">
            <Link href="/">Contact us</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
