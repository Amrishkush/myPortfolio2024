import { FaTwitter, FaGithub, FaLinkedin} from "react-icons/fa";
import { MdEmail } from "react-icons/md";




function Footer() {
  return (
    <div className="bg-gray-900 text-white font-poppins text-[10px] p-2 text-center flex gap-5 sm:gap-20 justify-center">
             <span className="my-auto"><span className="text-sm">©</span> 2024 <a href="#home" className="underline">Amrish Pratap Singh</a></span>
             <div className="flex text-white gap-4 ">
             <a href="https://twitter.com/pratap_amrish" target="_blank" rel="noopener noreferrer">
             <FaTwitter size={20}/>
             </a>
             <a href="https://github.com/Amrishkush" target="_blank" rel="noopener noreferrer">
             <FaGithub size={20}/>
             </a>
             <a href="mailto:amrishkush@gmail.com" target="_blank" rel="noopener noreferrer">
             <MdEmail size={20}/>
             </a>
             <a href="https://linkedin.com/in/amrishkush" target="_blank" rel="noopener noreferrer">
             <FaLinkedin size={20}/>
             </a>
             </div>
    </div>
  )
}

export default Footer