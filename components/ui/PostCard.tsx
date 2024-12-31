import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useUsers } from "@/contexts/UsersProvider";

const PostCard: React.FC<blog> = ({ title,body,userId,id }) => {
  const {user,fetchUser}=useUsers()

  useEffect(()=>{
    if (userId) {
      fetchUser(userId);
    }
  },[userId,fetchUser])
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: -5,
        boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="relative max-w-[384px] rounded-xl shadow-inner shadow-gray-900/20 p-4 flex flex-col gap-4 bg-gradient-to-br from-white/60 via-white/40 to-white/20 backdrop-blur-md border border-gray-300 overflow-hidden transform-gpu"
    >
      <div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-white/30 to-white/10 opacity-70 pointer-events-none"
        aria-hidden="true"
      ></div>

      <Link href={`/article/${id}`} className="relative z-10">
        <Image
          src="/images/Designer.jpeg"
          alt="Card Image"
          width={384}
          height={240}
          className="rounded-lg object-cover w-full shadow-md"
        />
        <div className="flex flex-col gap-3 mt-4">
          <div className="flex items-start text-pretty justify-between text-sm font-bold text-primary-2 hover:text-primary">
            <span className="w-full">{title}</span>
          </div>
          <p className="text-sm text-[#667085] line-clamp-2">{body}</p>
        </div>
      </Link>
      <div className="flex items-center gap-3 mt-4">
        <Image
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="User Avatar"
          width={40}
          height={40}
          className="rounded-full w-[40px] h-[40px]"
        />
        <div className="text-sm flex flex-col">
          <h1 className="font-medium">{user?.name}</h1>
          <h3 className="text-[#667085]">20 Jan 2022</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default PostCard;
