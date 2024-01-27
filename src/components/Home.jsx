import { FaNodeJs } from "react-icons/fa";
<FaNodeJs />;

function Home() {
  return (
    <div className="" id="home">
      <div className="lg:flex ">
        <div className=" w-[50%] sm:w-[35%] lg:w-[40%] mx-auto">
          <span className="animate-js absolute top-20 left-[40%] z-10">
            <FaNodeJs color="green" size={30} />
          </span>
          <img src="Images/myImage.jpg" alt="" className="w-full" />
          {/* <div className="moving-border"></div> */}
        </div>
        <div className="h-full w-full lg:w-[60%] m-auto px-1 lg:pl-10">
          <div className="font-poppins text-center lg:text-left mt-7 text-[4vw] lg:text-[2vw] relative z-10 ">
            <span className="animate-circle absolute top-0 w-10 h-10 rounded-full bg-blue-600 opacity-85 -z-10"></span>
            Here I am,
          </div>
          <div className="font-sans font-extrabold text-center lg:text-left text-[7vw] sm:text-[5vw] lg:text-[3.2vw] ">
            <span className="text-orange-400"> AMRISH </span> PRATAP SINGH
          </div>
          <div className="font-poppins sm:my-2 text-[#000010] font-extrabold text-[4vw] lg:text-[1.8vw] text-center lg:text-left px-1">
            Full Stack Web Developer
          </div>
          <div className="font-poppins sm:px-2 text-center lg:text-left">
            I am currently transitioning to Full-Stack Web Developer.
          </div>
          <div className="sm:px-2 py-2 w-[60%] sm:w-[50%] m-auto lg:ml-0 bg-[#000010] my-5 text-center text-white text-xl sm:text-2xl font-poppins rounded-md hover:bg-orange-500 cursor-pointer">
            Download Resume
          </div>
        </div>
      </div>
      <div className="border-2 border-white rounded-full m-auto bg-black h-10 w-6 flex lg:hidden">
        {" "}
        <div className="border-2 border-white m-auto h-2 rounded-full animate-scroll"></div>
      </div>
    </div>
  );
}

export default Home;
