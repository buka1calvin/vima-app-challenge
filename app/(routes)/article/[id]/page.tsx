"use client";
import { usePosts } from "@/contexts/PostsProvider";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MoonLoader } from "react-spinners";

const PostDetailsPage = ({ params }: { params: { id: string } }) => {
  const { post, posts, fetchPost, isLoading, isError } = usePosts();
  const articleId = params.id;

  useEffect(() => {
    fetchPost(articleId);
  }, [articleId, fetchPost]);

  if (isLoading) {
    return (
      <div className="text-center text-lg h-screen w-screen flex justify-center items-center">
        <MoonLoader/>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-lg text-red-500 flex justify-center items-center h-screen w-screen">
        Something went wrong!
      </div>
    );
  }

  return (
    <main className=" md:px-20 px-4 max-w-7xl w-full min-h-screen py-20 flex flex-col gap-8">
      <div className="relative w-full flex flex-col gap-6 bg-white/70 p-6">
        <div className="bg-purple-800 text-white px-3 py-2">Technology</div>
        <h1 className="text-4xl font-bold text-primary-600">
          {post?.title || "Post Title"}
        </h1>

        <div className="flex items-center gap-3 mt-8">
          <Image
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="User Avatar"
            width={50}
            height={50}
            loading="lazy"
            className="rounded-full"
          />
          <div className="text-sm">
            <h3 className="font-semibold">{post?.userId || "Author Name"}</h3>
            <p className="text-gray-500">Published on 20 Jan 2022</p>
          </div>
        </div>
        <Image src="/images/Designer.jpeg" loading="lazy" alt="" width={1200} height={300} />

        <div className="prose max-w-none text-lg text-gray-700 mt-4">
          <p>
            {post?.body || "Post body content goes here."} Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Culpa recusandae, aliquam
            dolorum dolores modi deserunt ipsum doloremque ex, sint ullam
            praesentium at, a explicabo error aut! Inventore tempore temporibus
            quis!
          </p>
        </div>
      </div>

      <section className="w-full mt-12">
        <h2 className="text-3xl font-bold text-primary-600 mb-6">
          Related Posts
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {posts.slice(0, 4).map((relatedPost) => (
            <div
              key={relatedPost.id}
              className="relative rounded-lg shadow-md overflow-hidden bg-white"
            >
              <Link href={`/post/${relatedPost.id}`}>
                <Image
                  src="/images/Designer.jpeg"
                  alt="Card Image"
                  loading="lazy"
                  width={380}
                  height={240}
                  className="w-full h-[240px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-primary-600">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {relatedPost.body}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PostDetailsPage;
