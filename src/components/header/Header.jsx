import {useState} from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex justify-between items-center max-w-11/12 mx-auto">
      <h2 className="text-xl lg:text-2xl font-bold text-[#150B2B]">
        Recipe Calories
      </h2>
      <div>
        <ul className={`md:flex absolute duration-1000 md:static md:justify-between ${open ? 'top-3 right-15 bg-gray-400 p-2 rounded-lg': '-top-60 right-15'} gap-5 text-[#150B2BB3]`}>
          <li className={`${open ? 'hover:text-red-400 duration-400' : ''}`}>
            <a href="#">Home</a>
          </li>
          <li className={`${open ? 'hover:text-red-400 duration-400 my-2' : ''}`}>
            <a href="#">Recipes</a>
          </li>
          <li className={`${open ? 'hover:text-red-400 duration-400' : ''}`}>
            <a href="#">About</a>
          </li>
          <li className={`${open ? 'hover:text-red-400 duration-400 my-2' : ''}`}>
            <a href="#">Search</a>
          </li>
          
        </ul>
      </div>
      <div className=" hidden md:flex gap-3 my-1 md:visible lg:visible xl:visible">
        <div className="flex">
          <input
            className="bg-[#150B2B0A] rounded-4xl"
            type="text"
            name=""
            id=""
            placeholder="Search"
          />
        </div>
        <button className="p-2 rounded-full bg-[#0BE58A]">
          <span className="text-2xl text-[#150B2B]">
            <FaRegUserCircle />
          </span>
        </button>
      </div>
      <div onClick={() => setOpen(!open)} className="text-2xl md:hidden">
        {
          open === true ? <MdClose /> : <IoMdMenu />
        }
      </div>
    </div>
  );
};

export default Header;
