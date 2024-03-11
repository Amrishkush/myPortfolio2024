import { IoClose } from "react-icons/io5";

function DetailsModal({ project, setProject }) {
  let projectData = project;
  return (
    <div className=" text-black fixed inset-0 bg-black bg-opacity-80  flex justify-center items-center z-50 abc">
      <div className="bg-white w-[95%] sm:w-[70%] lg:w-[50%] overflow-auto h-[80%] p-[3%] relative">
        <img
          src={`${projectData.imageUrl[0]}`}
          alt=""
          className="m-auto h-80 w-[100%] rounded-lg"
        />
        <h1 className="font-poppins text-4xl font-extrabold mt-5">
          {projectData.title}
        </h1>
        <h3 className="font-poppins text-sm text-gray-500 mt-3 mb-5 font-extrabold">
          {projectData.group}
        </h3>
        <div className="justify-between ">
          <div className="w-[100%] lg:flex justify-between p-8 text-white bg-gray-800 mb-8 hidden">
            <div className="w-1/3 text-center m-auto">
              <h1 className="text-lg font-poppins mb-1">Tech Stack</h1>
              <h5 className="text-sm font-poppins text-gray-400">
                {projectData.techStack.join(" , ")}
              </h5>
            </div>
            <div className="w-1/3 text-center m-auto">
              <h1 className="text-lg font-poppins mb-1">Duration</h1>
              <h5 className="text-sm font-poppins text-gray-400">
                {projectData.duration}
              </h5>
            </div>
            <div className="w-1/3 text-center grid">
              <a
                href={`${projectData.codeUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-sm font-poppins mb-3 p-2 w-full text-white bg-black rounded-lg">
                  View Code
                </button>
              </a>
              <a
                href={`${projectData.siteUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-sm font-poppins w-full p-2 bg-blue-700 text-white rounded-lg">
                  Preview
                </button>
              </a>
            </div>
          </div>
          <div className="sm:flex justify-between">
            <p className="font-sans text-lg tracking-widest sm:w-[60%] lg:w-[100%] pb-10">
              {projectData.description}
            </p>
            <div className="sm:w-[30%] grid lg:hidden text-center sm:text-left">
              <div className="">
                <h1 className="text-lg font-poppins mb-1">Tech Stack</h1>
                <h5 className="text-sm font-poppins text-gray-400">
                  {projectData.techStack.join(" , ")}
                </h5>
              </div>
              <div className="">
                <h1 className="text-lg font-poppins mb-1">Date</h1>
                <h5 className="text-sm font-poppins text-gray-400">
                  {projectData.date}
                </h5>
              </div>
              <div className="">
                <h1 className="text-lg font-poppins mb-1">Duration</h1>
                <h5 className="text-sm font-poppins text-gray-400">
                  {projectData.duration}
                </h5>
              </div>
              <div className="mt-6">
                <a
                  href={`${projectData.codeUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-sm font-poppins mb-3 p-2 w-full text-white bg-black rounded-lg">
                    View Code
                  </button>
                </a>
                <a
                  href={`${projectData.siteUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-sm font-poppins p-2 w-full bg-blue-700 text-white rounded-lg">
                    Preview
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2 flex flex-wrap gap-x-2 gap-y-4">
          <img
            src={`${projectData.imageUrl[1]}`}
            alt=""
            className="h-60 w-[100%]"
          />
          <img
            src={`${projectData.imageUrl[2]}`}
            alt=""
            className="h-60 w-[100%]"
          />
          <img
            src={`${projectData.imageUrl[3]}`}
            alt=""
            className="h-60 w-[100%]"
          />
        </div>
        <div className="fixed top-8 sm:top-[7%] right-[10px] sm:right-[8%] lg:right-[20%]">
          <IoClose
            size={40}
            color="white"
            className="border-2 rounded-lg bg-black hover:bg-orange-500 cursor-pointer"
            onClick={() => setProject(null)}
          />
        </div>
      </div>
    </div>
  );
}

export default DetailsModal;
