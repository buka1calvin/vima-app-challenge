import type { Metadata } from "next";
import { QueryClient, QueryClientProvider } from "react-query";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "VimaBlog | Home",
  description: "Vima Blog is your go-to platform for the latest news, insights, and trends from around the world. Discover articles on a variety of topics, updated regularly.",
};

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} overflow-x-hidden flex flex-col justify-center items-center`}>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
