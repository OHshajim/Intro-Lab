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
    <div className=" top-4 right-4  bg-transparent fixed">
      {/* Checking part */}
      <label className="btn btn-circle overflow-hidden hover:bg-[#f9d3de] swap swap-rotate bg-[#f9d3de]">
        <input
          id="myCheck"
          type="checkbox"
          className="bg-[#f9d3de] "
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <IoIosMenu className="swap-off fill-current bg-[#f9d3de] text-4xl text-black" />
        <IoClose className="swap-on fill-current bg-[#f9d3de] text-4xl text-black" />
      </label>

      {/*  Navigation  part*/}
      <nav className={isChecked ? "flex" : "hidden"}>
        <ul className=" flex flex-row gap-4 absolute right-16 top-4 bg-transparent">
          {list.map((nav) => (
            <li key={nav.name}>
              <a
                href={nav.path}
                className="px-5 py-3 rounded-3xl bg-[#f9d3de] text-black"
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
