import {
  Facebook,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";

const Footer = () => {
  const links = [
    {
      icon: <FacebookIcon />,
      label: "Facebook",
      href: "https://www.facebook.com/dushi.patel.982",
      bg: "bg-blue-700",
    },
    {
      icon: <InstagramIcon />,
      label: "Instagram",
      href: "https://www.facebook.com/dushi.patel.982",
      bg: "bg-gradient-to-bl from-orange-700 to-yellow-300",
    },
    {
      icon: <TwitterIcon />,
      label: "Twitter",
      href: "https://www.facebook.com/dushi.patel.982",
      bg: "bg-black",
    },
    {
      icon: <LinkedinIcon />,
      label: "Linkedin",
      href: "https://www.facebook.com/dushi.patel.982",
      bg: "bg-blue-300",
    },
    {
      icon: <YoutubeIcon />,
      label: "Youtube",
      href: "https://www.facebook.com/dushi.patel.982",
      bg: "bg-red-500",
    },
  ];

  return (
    <footer className="h-fit flex flex-col gap-4 bg-gradient-to-bl from-green-500 to-green-600 text-white p-4">
      <div className="w-full flex flex-row col-span-3">
        <div className="w-1/3 flex flex-col gap-4 min-h-40 p-8">
          <h3>Logo</h3>
          <h6>
            Welcome to our community-focused church where love and unity prevail.
          </h6>
          <p>Join us in spreading positivity and compassion.</p>
        </div>
        <div className="w-2/3 flex min-h-96 flex-row justify-end gap-16 p-8">
          <div className="flex flex-col first:gap-4">
            <h5 className="text-white">Quick Links</h5>
            <Link href={""}>About us</Link>
            <Link href={""}>Our mission</Link>
            <Link href={""}>Get Involved</Link>
            <Link href={""}>Contact us</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-white">Connect With Us</h5>
            <Link href={""}>Volunteer</Link>
            <Link href={""}>Events</Link>
            <Link href={""}>Blog</Link>
            <Link href={""}>Resources</Link>
            <Link href={""}>FAQs</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-white">Stay Connected</h5>
            {links.map((link, index) => (
              <Button
                key={index}
                size={"sm"}
                variant={"link"}
                className={`mx-0 gap-4 text-white duration-500 hover:text-green-100 hover:${link.bg} `}
                asChild
              >
                <Link href={link.href}>
                  {link.icon}
                  {link.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-3 flex h-32 items-center justify-between border-t-2 border-white p-4">
        <p className="w-fit">© 2024 Revival Temple. All rights reserved.</p>
        <div className="flex flex-row gap-4">
          <Link href={""}>Privacy Policy</Link>
          <Link href={""}>Terms of Service</Link>
          <Link href={""}>Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
