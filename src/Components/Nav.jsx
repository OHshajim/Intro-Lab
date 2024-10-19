import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    console.log(e.target.checked); // This will log `true` when checked, `false` when unchecked
  };

  const list = [
    {
      name: "About",
      path: "#About",
    },
    {
      name: "Speakers",
      path: "#Speakers",
    },
    {
      name: "Program",
      path: "#Program",
    },
    {
      name: "Tickets",
      path: "#Tickets",
    },
    {
      name: "Additional",
      path: "#Additional",
    },
  ];
  return (
    <div className="z-50 top-4 right-4  bg-transparent fixed">
      {/* Checking part */}
      <label className="btn rounded-full w-12 border-none overflow-hidden hover:bg-[#f9d3de] animate-bounce swap swap-rotate bg-[#f9d3de]">
        <input
          id="myCheck"
          type="checkbox"
          className="bg-[#f9d3de] "
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <IoIosMenu className="swap-off fill-current bg-[#f9d3de] text-2xl text-black" />
        <IoClose className="swap-on fill-current bg-[#f9d3de] text-2xl text-black" />
      </label>

      {/*  Navigation  part*/}
      <nav className={isChecked ? "flex" : "hidden"}>
        <ul className=" flex flex-row gap-4 absolute right-16 top-2 bg-transparent">
          {list.map((nav) => (
            <li key={nav.name} className="bg-transparent">
              <a
                href={nav.path}
                className="px-8 py-[10px] text-sm rounded-3xl bg-[#f9d3de] hover:bg-white text-black font-bold duration-300"
              >
                {nav.name} 
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
