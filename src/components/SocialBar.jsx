import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function SocialBar() {
  return (
    <div className="flex-col h-[40%] hidden sm:block">
      <div className="mb-12 h-[40%]">
        <a href="https://www.linkedin.com/in/amrishkush/" target="_blank" rel="noopener noreferrer">
                  
        <FaLinkedin
          className="m-auto  p-1 rounded hover:bg-blue-800 hover:text-white cursor-pointer"
          size={30}
        />
        </a>
        <a href="mailto:amrishkush@gmail.com" target="_blank" rel="noopener noreferrer">
        <MdEmail
          className="m-auto p-1 rounded hover:bg-black hover:text-white cursor-pointer"
          size={30}
        />
        </a>
        <a href="https://github.com/Amrishkush/" target="_blank" rel="noopener noreferrer">
        <FaSquareGithub
          className="m-auto p-1 rounded hover:bg-black hover:text-white cursor-pointer"
          size={30}
        />
        </a>
      </div>
      <div className="-rotate-90">
        <h1 className="font-poppins text-sm font-thin cursor-vertical-text">
          Follow Me
        </h1>
      </div>
    </div>
  );
}

export default SocialBar;
