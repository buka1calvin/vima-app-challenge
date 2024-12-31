import AllPosts from "@/components/home/AllPosts";
import HeroPage from "@/components/home/HeroPage";

export default function Home() {
  return (
    <main className="w-screen flex flex-col justify-center items-center">
      <HeroPage/>
      <AllPosts/>
    </main>
  );
}
