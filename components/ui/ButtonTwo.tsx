import Link from 'next/link'
import React from 'react'

const ButtonTwo = ({title}:{title:string}) => {
  return (
<Link href="#_" className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-primary hover:text-white rounded-md shadow-2xl group">
    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-gray-700 via-gray-400 to-primary group-hover:opacity-100"></span>
    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-gray-700 to-transparent opacity-5 h-1/3"></span>
    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-700 to-transparent opacity-5"></span>
    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-gray-700 to-transparent opacity-5"></span>
    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-gray-700 to-transparent opacity-5"></span>
    <span className="absolute inset-0 w-full h-full border border-primary rounded-md opacity-10"></span>
    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
    <span className="relative">{title}</span>
</Link>
  )
}

export default ButtonTwo
