"use client";
import React from "react";

import Image from "next/image";
import Container from "./Container";
import ActiveLink from "./ActiveLink";
import { usePathname } from "next/navigation";

const currentYear = new Date().getFullYear();

const Footer = () => {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  return (
    <footer
      className={`w-full ${
        isDashboard ? "hidden" : ""
      } py-6 backdrop-blur-lg bg-white/10`}
    >
      <Container>
        <div className="flex flex-row flex-wrap items-center justify-center text-center  gap-y-6 gap-x-12 md:justify-between">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="logo"
              className="md:w-full w-20"
              width={100}
              height={100}
            />{" "}
            <span className="md:ml-2 text-4xl md:text-5xl">Programming</span>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-y-2 gap-x-8">
            <li>
              <ActiveLink path="/about">About Us</ActiveLink>
            </li>
            <li>
              <ActiveLink path="/license">License</ActiveLink>
            </li>
            <li>
              <ActiveLink path="/privacy">Privacy Policy</ActiveLink>
            </li>
            <li>
              <ActiveLink path="/contact">Contact Us</ActiveLink>
            </li>
          </ul>
        </div>
        <span className="block my-8 border-t border-pink-gray-50" />
        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-center ">
          © {currentYear} AS Programming
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
