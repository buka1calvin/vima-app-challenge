"use client";
import { NavLinks } from "@/constants";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ButtonTwo from "./ui/ButtonTwo";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="w-screen md:px-20 bg-white z-40 flex justify-between items-center fixed top-0 left-0 max-h-20 h-20 shadow">
      <Link href="/" className="">
        Logo
      </Link>
      <div className="flex items-center md:flex-row flex-col gap-5">
        {NavLinks.map((link, i) => {
          const ActiveLink =
            pathname === link.path || pathname.startsWith(link.path);
          return (
            <Link
              href={link.path}
              key={i}
              className={clsx(" text-sm", {
                "text-green-500 px-2 rounded-full": ActiveLink,
              })}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <ButtonTwo title="Subscribe To Us"/>
    </nav>
  );
};

export default Navbar;
