import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
const Header = () => {
  return (
    <div className="flex justify-between items-center max-w-11/12 mx-auto">
      <h2 className="text-xl lg:text-2xl font-bold text-[#150B2B]">
        Recipe Calories
      </h2>
      <div>
        <ul className="flex gap-5 text-[#150B2BB3]">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Recipes</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-3 my-1">
        {/* <div className="flex">
          <input
            className="bg-[#150B2B0A] rounded-4xl"
            type="text"
            name=""
            id=""
            placeholder="Search"
          />
        </div> */}
        <button className="p-2 rounded-full bg-[#0BE58A]">
          <span className="text-2xl text-[#150B2B]">
            <FaRegUserCircle />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
