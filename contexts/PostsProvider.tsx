"use client";

import { fetchPostById, fetchPosts } from "@/lib/requests";
import { createContext, useContext, ReactNode, useState } from "react";
import { useQuery } from "react-query";


interface PostsContextType {
  posts: blog[];
  isLoading:boolean;
  isError:unknown;
  post:blog;
  fetchPost:(id:string)=>void
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const usePosts = () => {
    const context = useContext(PostsContext);
    if (!context) {
      throw new Error("usePosts must be used within a PostsProvider");
    }
    return context;
  };


export const PostsProvider = ({ children }: { children: ReactNode }) => {
    const[postId,setPostId]=useState<string >("")
const {data:posts=[],isLoading,isError}=useQuery("posts",fetchPosts)
const {data:post=null}=useQuery(['post',postId],()=>fetchPostById(postId))

const fetchPost = (id: string) => {
  setPostId(id);
};
  return (
    <PostsContext.Provider value={{ posts ,isError,isLoading,post,fetchPost}}>
      {children}
    </PostsContext.Provider>
  );
};

