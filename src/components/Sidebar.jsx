import { IoIosHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
// import { MdWork } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function Sidebar({ setComponent, component }) {
  const isLargeScreen = window.innerWidth >= 1024;
  const [isMenuOpen, setMenuOpen] = useState(isLargeScreen);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleColor = (active) => {
    if (active === component) {
      return " text-orange-500 hover:text-orange-500";
    } else {
      return "text-gray-50 hover:text-orange-500 ";
    }
  };
  return (
    <div className="absolute top-3 lg:top-8 left-8 md:left-12">
      {/* <div className="my-auto relative right-4 bg-gray-900 inline-block hidden rounded-full p-4 -z-20">
             <FaBars size={22} className="text-blue-400"/>
           </div> */}
      {/* height badal ke condition cross neeche wala h-15 krke condition ke based pr cross nhi three bars laga do jarurat nhi h upar wala div ka isi se switch kr sktehai */}
      <h2 className="text-right left-9 absolute top-5 rotate-90 font-poppins tracking-wider bg-orange-500 px-1  rounded-md">MENU</h2>
      <div
        className={`bg-gray-800 inline-block ${
          isMenuOpen ? "h-[300px] " : "h-18"
        } rounded-full m-auto relative top-0 left-[-18px] p-4`}
      >
        {isMenuOpen ? (
          <IoClose
            size={26}
            className={`text-blue-400 z-50 cursor-pointer`}
            onClick={toggleMenu}
          />
        ) : (
          <FaBars
            size={26}
            className={`text-blue-400 cursor-pointer`}
            onClick={toggleMenu}
          />
        )}
      </div>
      <div className={`absolute top-16 ${isMenuOpen ? "" : "hidden"}`}>
        <a
          className="flex gap-9 my-4 font-bold font-poppins cursor-pointer"
          onClick={() => {
            setComponent("home")}}
          href="#home"
        >
          <span className="my-auto">
            <IoIosHome size={20} className={`${handleColor("home")}`} />
          </span>
          <span
            className={`bg-gray-800  px-2 py-1 rounded-lg ${handleColor(
              "home"
            )}`}
          >
            HOME
          </span>
        </a>
        <a
          className="flex gap-9 my-4 font-bold font-poppins cursor-pointer"
          onClick={() => setComponent("portfolio")}
          href= "#about"
        >
          <span className="my-auto">
            <FaUser size={18} className={`${handleColor("portfolio")}`} />
          </span>
          <span
            className={`bg-[#333333] px-2 py-1 rounded-lg ${handleColor(
              "portfolio"
            )}`}
          >
            ABOUT
          </span>
        </a>
        {/* <div className="flex gap-9 my-4 font-bold font-poppins" >
          <span className="my-auto">
            <MdWork size={18} className="text-gray-300" />
          </span>
          <span className="bg-slate-900 text-white p-1 rounded-lg">PORTFOLIO</span>
        </div> */}
        <a
          className="flex gap-9 my-4 font-bold font-poppins cursor-pointer"
          onClick={() => setComponent("projects")}
          href="#projects"
        >
          <span className="my-auto">
            <MdAssignment size={18} className={`${handleColor("projects")}`} />
          </span>
          <span
            className={`bg-[#333333] px-2 py-1 rounded-lg ${handleColor(
              "projects"
            )}`}
          >
            PROJECTS
          </span>
        </a>
        <a
          className="flex gap-9 my-4 font-bold font-poppins"
          onClick={() => setComponent("contact")}
          href="#contact"
        >
          <span className="my-auto">
            <IoIosChatbubbles
              size={18}
              className={`${handleColor("contact")}`} 
            />
          </span>
          <span
            className={`bg-[#333333]  px-2 py-1 rounded-lg ${handleColor("contact")}`}
          >
            CONTACT
          </span>
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
