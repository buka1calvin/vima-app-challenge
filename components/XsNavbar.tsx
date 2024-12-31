import { NavLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";

const XsNavbar = () => {
  const pathname = usePathname();

  const variants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="flex flex-col w-[70vw] bg-gray-900 text-white space-y-4 p-4"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
    >
      {NavLinks.map((item, i) => {
        const isActive = pathname === item.path;
        return (
          <Link
            key={i}
            href={item.path}
            className={cn(
              "text-lg font-medium py-2 px-4 rounded transition-transform hover:scale-105",
              isActive
                ? "bg-gray-600 text-gray-300 shadow-md"
                : "bg-neutral-800/50 text-white"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </motion.div>
  );
};

export default XsNavbar;
