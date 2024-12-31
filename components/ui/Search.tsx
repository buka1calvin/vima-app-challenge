import { IoSearchOutline } from "react-icons/io5";

interface searchProps{
    placeholder:string,
}
const Search = ({placeholder}:searchProps) => {
  return (
    <div className="">
    <div className="h-9 relative w-full max-w-[695px] border overflow-hidden rounded-md shadow shadow-secondary/20">
        <input type="text" placeholder={placeholder} className="w-full text-gray-700 text-base font-normal px-2 py-1 h-full" />
        <button className="text-lg absolute right-0 py-2 top-0 bottom-0 shadow-inner shadow-secondary/20 flex items-center justify-center h-full w-12">
            <IoSearchOutline className='text-secondary'/>
        </button>
    </div>
    <div className="">

    </div>
    </div>
  )
}

export default Search
