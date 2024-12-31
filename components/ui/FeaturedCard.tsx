import { useUsers } from '@/contexts/UsersProvider';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';


const FeaturedCard: React.FC<blog> = ({title,body,userId,id }) => {
  const {user,fetchUser}=useUsers()

  useEffect(()=>{
    if (userId) {
      fetchUser(userId);
    }
  },[userId,fetchUser])


  return (
    <Link href={`/article/${id}`} className="w-full md:h-[300px] flex md:flex-row flex-col items-center bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg shadow-inner overflow-hidden">
      <div className="flex-none w-1/2 h-full relative">
        <Image
          src="/images/Designer.jpeg"
          alt="Featured Article"
          layout="fill"
          objectFit="cover"
          className="rounded-l-lg"
        />
      </div>

      <div className="flex flex-col justify-center md:w-1/2 w-full h-full p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>
        <p className="text-lg text-gray-600 mb-6 line-clamp-3">{body}</p>
        <div className="flex items-center gap-4">
          <Image
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt= "user Avatar"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <h3 className="text-gray-800 font-medium">{user?.name}</h3>
            <p className="text-gray-500 text-sm">20 Jan 2022</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCard;
