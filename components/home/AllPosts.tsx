"use client";

import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import PostCard from "../ui/PostCard";
import { blogs } from "@/constants/blogs";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import FeaturedCard from "../ui/FeaturedCard";
import { usePosts } from "@/contexts/PostsProvider";
import { MoonLoader } from "react-spinners";

const BlogsList = () => {
  const { posts, isLoading, isError } = usePosts();
  const [perPage, setPerPage] = useState(4);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    const handleResize = () => {
      setPerPage(window.innerWidth > 768 ? 8 : 4);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const lowercasedTerm = debouncedSearchTerm.toLowerCase();
      setFilteredPosts(
        posts.filter(
          (post) =>
            post.title.toLowerCase().includes(lowercasedTerm) ||
            post.body.toLowerCase().includes(lowercasedTerm)
        )
      );
    } else {
      setFilteredPosts(posts);
    }
  }, [debouncedSearchTerm, posts]);

  if (isLoading) {
    return (
      <div className="text-center text-lg h-screen w-screen flex justify-center items-center">
        <MoonLoader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-lg text-red-900/50 flex justify-center items-center h-screen w-screen">
        Something went wrong!
      </div>
    );
  }
  const loadMore = () => {
    setPerPage((prevPerPage) => prevPerPage + 4);
  };

  return (
    <section className="max-w-[1440px] w-screen min-h-screen lg:px-[80px] flex flex-col justify-start items-center py-12 gap-12 px-6">
      <div className="w-full flex flex-col justify-start gap-4 mb-3">
        <h1 className="text-5xl font-bold text-primary">Featured Articles</h1>
      </div>
      {posts.slice(0, 1).map((post) => {
        return (
          <FeaturedCard
            key={post.id}
            title={post.title}
            body={post.body}
            id={post.id}
            userId={post.userId}
          />
        );
      })}
      <div className="w-full flex flex-col justify-start gap-4 mb-6">
        <h1 className="text-5xl font-bold text-primary">Latest Articles</h1>
        <p className="md:max-w-[700px] text-lg text-gray-600">
          Here's a list of articles, thoughts and ideas around topics like
          design systems, accessibility, state machines and lots more.
        </p>
        <PlaceholdersAndVanishInput
          placeholders={["Search by title", "Search by content", "Find blogs"]}
          onChange={(e) => setSearchTerm(e.target.value)}
          onSubmit={(e) => e.preventDefault()}
        />
      </div>
      {posts.length > 0 ? (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-3">
          {filteredPosts.slice(0, perPage).map((post) => {
            return (
              <PostCard
              key={post.id}
                title={post.title}
                body={post.body}
                id={post.id}
                userId={post.userId}
              />
            );
          })}
        </div>
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          No search results
        </div>
      )}
      {perPage < filteredPosts.length && (
        <button
          className="border-gray-400 shadow-inner shadow-gray-900/30 border text-gray-700 py-2 px-8 rounded-lg hover:bg-primary hover:text-white transition"
          onClick={loadMore}
        >
          Load More
        </button>
      )}
    </section>
  );
};

export default BlogsList;
