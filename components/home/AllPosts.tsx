"use client";

import React, { useState, useEffect } from "react";
import PostCard from "../ui/PostCard";
import { blogs } from "@/constants/blogs";

const BlogsList = () => {
  const [perPage, setPerPage] = useState(4); // Default to showing 4 blogs initially.

  useEffect(() => {
    const handleResize = () => {
      setPerPage(window.innerWidth > 768 ? 8 : 4); // Adjust items per page based on screen size.
    };

    handleResize(); // Initial execution on component mount.

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount.
  }, []);

  const loadMore = () => {
    setPerPage((prevPerPage) => prevPerPage + 4); // Increment blogs displayed by 4.
  };

  return (
    <section className="max-w-[1440px] w-screen min-h-screen lg:px-[80px] flex flex-col justify-start items-center pb-24 gap-12 px-6">
      {blogs.length > 0 ? (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-8">
          {blogs.slice(0, perPage).map((blog: any) => (
            <PostCard
              image={blog.image}
              intro={blog.intro}
              description={blog.description}
              user={blog.user}
              key={blog.id}
              link={blog.link}
            />
          ))}
        </div>
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          No search results
        </div>
      )}
      {perPage < blogs.length && (
        <button
          className="border-primary-2 border text-primary-2 py-2 px-8 rounded-lg hover:bg-primary-2 hover:text-white transition"
          onClick={loadMore}
        >
          Load More
        </button>
      )}
    </section>
  );
};

export default BlogsList;
