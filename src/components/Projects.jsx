import { projectData } from "../Data/Data/";

const data = projectData;

function Projects({ setProject }) {
  return (
    <div className="w-full m-auto lg:pb-10" id="projects">
      <h1 className="font-poppins text-6xl font-extrabold text-center my-12 lg:my-1">
        <span className="text-orange-400 underline">PROJ</span>ECTS
      </h1>
      <div className="flex flex-wrap justify-center m-auto my-8 gap-6 lg:gap-16 xl:gap-6 h-full">
        {data.map((item) => (
          <div
            className="w-[80%] sm:w-[300px] md:w-[340px] lg:w-[400px] xl:w-[380px] h-max p-6 sm:p-10 bg-gray-900 rounded-3xl"
            key={item.id}
          >
            <img
              src={`${item.imageUrl[0]}`}
              alt=""
              className=" w-[100%] h-[200px] m-auto rounded-md"
            />
            <h2 className="font-poppins text-xl md:text-[150%] mt-4 font-extrabold text-gray-200">
              {item.title}
            </h2>
            <h4 className="font-poppins font-extrabold text-orange-500">
              {item.techStack[0]}
            </h4>
            <div
              className="mt-4 text-center w-[70%] sm:w-[65%] m-auto  border-2 border-orange-500 hover:bg-orange-500 cursor-pointer font-poppins text-white px-4 py-1"
              onClick={() => setProject(item)}
            >
              Read More...
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
