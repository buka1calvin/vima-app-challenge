import React from "react";
import Image from "next/image";
import Link from "next/link";

const PostCard: React.FC<blog> = ({ image, intro, description, user,link}) => {
  return (
    <Link href={link} className="group max-w-[384px]  rounded-lg shadow-lg flex flex-col gap-4 hover:bg-[#fcfffde8] hover:transition duration-100 ease-in-out">
      <Image src={image} alt="" width={336} height={240} className="group-hover:grayscale-[70%]"/>
      <div className="flex flex-col gap-3 p-4">
        <div className="flex text-sm font-bold text-primary-2 w-full items-start justify-between cursor-pointer  group-hover:text-[#0065a4e7]">
          <span className="w-[85%]">
          {intro.title}
          </span>
          <Image src={intro.icon} alt="" width={24} height={24}/>
        </div>
        <p className="text-sm text-[#667085] line-clamp-2">{description}</p>
      </div>
      <div className="flex items-center gap-3 px-4 pb-3">
        <Image src={user.avatar} alt="" width={40} height={40} className="rounded-full w-[40px] h-[40px]"/>
        <div className="text-sm flex flex-col justify-between">
          <h1 className="font-md">{user.name}</h1>
          <h3 className="text-[#667085]">{user.date}</h3>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
