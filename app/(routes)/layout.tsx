"use client";
import { PostsProvider } from "@/contexts/PostsProvider";
import { UsersProvider } from "@/contexts/UsersProvider";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      refetchOnWindowFocus: true,
    },
  },
});
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={client}>
      <UsersProvider>
        <PostsProvider>
          <main>{children}</main>
        </PostsProvider>
      </UsersProvider>
    </QueryClientProvider>
  );
};

export default layout;
