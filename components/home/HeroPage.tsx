import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const HeroPage = () => {
  return (
    <section className="w-full dark:bg-gray-800 min-h-screen py-4 relative bg-white flex flex-col items-center justify-center overflow-hidden px-6 md:px-20">
      <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-[#e4e2e7] to-gray-900 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-r from-[#fffeff] to-gray-900 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute left-0 h-full pointer-events-none opacity-20 flex flex-col space-y-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#111827"
            d="M27.3,-17.5C31.7,4.7,29.1,20.6,19.3,28C9.5,35.5,-7.4,34.5,-26.4,23.7C-45.4,12.9,-66.4,-7.7,-62.4,-29.5C-58.3,-51.2,-29.2,-73.9,-8.9,-71C11.4,-68.1,22.9,-39.6,27.3,-17.5Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="w-24 h-24 ml-4 md:w-40 md:h-40 md:ml-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke=""
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 11H5M12 6l-7 7 7 7"
          />
        </svg>
        <svg
          className="w-20 h-20 ml-2 md:w-28 md:h-28 md:ml-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#111827"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a8 8 0 00-8-8H5v2h9a6 6 0 016 6z"
          />
        </svg>
      </div>

      <div className="absolute right-0 h-full pointer-events-none opacity-20 flex flex-col space-y-10">
        <svg
          className="w-24 h-24 mb-8 md:w-36 md:h-36 md:mb-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#111827"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 10h18M3 14h18"
          />
        </svg>
        <svg
          className="w-32 h-32 mr-4 md:w-48 md:h-48 md:mr-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#111827"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16V6a1 1 0 011-1h3m-1 10H6a2 2 0 00-2 2v3h8v-3a2 2 0 00-2-2z"
          />
        </svg>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#111827"
            d="M43.6,-54.8C46.8,-49.3,32.9,-26.3,30.2,-10C27.5,6.3,36,16,38.4,31.8C40.7,47.6,37,69.5,27.7,70.5C18.3,71.5,3.4,51.6,-8.2,39.9C-19.8,28.2,-28.1,24.6,-39.2,17C-50.3,9.4,-64.1,-2.2,-62.6,-11.1C-61.1,-20.1,-44.3,-26.4,-31.3,-30.1C-18.3,-33.9,-9.2,-35,5.5,-41.6C20.2,-48.2,40.4,-60.2,43.6,-54.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="text-center text-primary flex flex-col gap-6 items-center">
        <h1 className="text-6xl font-bold mb-4">Welcome to Vima Blog</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-500">
          Stay updated with the latest news and stories from around the world.
          Explore in-depth articles and thoughtful insights tailored for curious
          minds.
        </p>
        <Button title="Go to Articles"/>
      </div>
    </section>
  );
};

export default HeroPage;
