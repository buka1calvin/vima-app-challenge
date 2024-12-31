"use client";
import { NavLinks } from "@/constants";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import ButtonTwo from "./ui/ButtonTwo";
import { TiThMenuOutline } from "react-icons/ti";
import OverlayModel from "./ui/OverlayModel";
import XsNavbar from "./XsNavbar";

const Navbar = () => {
  const pathname = usePathname();
  const [isModelOpen, setIsModelOpen] = useState(false);
  return (
    <nav className="w-screen md:px-20 px-4 bg-white z-40 flex justify-between items-center fixed top-0 left-0 max-h-20 h-20 shadow">
      <Link href="/" className="text-4xl font-bold">
      <h1 className="text-3xl font-bold mb-4"><span className="text-gray-500">Vima</span> Blog</h1>
      </Link>
      <div className="md:flex hidden items-center md:flex-row flex-col gap-5">
        {NavLinks.map((link, i) => {
          const ActiveLink =
            pathname === link.path || pathname.startsWith(link.path);
          return (
            <Link
              href={link.path}
              key={i}
              className={clsx(" text-sm", {
                "text-gray-500 font-bold px-2 rounded-full": ActiveLink,
              })}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-4">
        <ButtonTwo title="Subscribe To Us" />
        <div className="h-12 w-[1px] rounded bg-gray-300" />

        <div className="p-2 rounded bg-gray-200 hover:bg-gray-300">
          <CgProfile className="h-8 w-8" />
        </div>
        <button
          onClick={() => setIsModelOpen(true)}
          className="md:hidden flex justify-center items-center p-1 rounded border border-gray-700 text-gray-700"
        >
          <TiThMenuOutline className="h-9 w-9" />
        </button>
      </div>
      <OverlayModel isOpen={isModelOpen} onClose={() => setIsModelOpen(false)}>
        <XsNavbar />
      </OverlayModel>
    </nav>
  );
};

export default Navbar;
