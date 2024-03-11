import { useState } from "react";
import { projectData } from "../Data/Data/";


// const data = projectData;

function Projects({ setProject }) {
  const [data, setData] = useState(projectData)
  const [active, setActive] = useState("All")
  const [visibleProjects, setVisibleProjects] = useState(3)
  const [loadMoreButtonDiv, setLoadMoreButtonDiv] = useState("")
  const groups = ["All", "MERN Stack Full" ,"ReactJS Frontend", "DOM Manipulation" ]
  function loadMore(){
    if(visibleProjects <= data.length){
      setVisibleProjects(visibleProjects + 3)
      // setLoadMoreButtonDiv("")
    } else {
      setVisibleProjects(data.length)
      setLoadMoreButtonDiv("hidden")
    }
  }
  function loadProject(group){
    setActive(group)
    setVisibleProjects(3)   //because once set on every loadmore visibleprojects will be set so it will be loading already with already new increased set visible projects 
    setLoadMoreButtonDiv("")  //other wise once its in state we are not loading page it will remain hidden if we come to other component then also 
    const filteredData = projectData.filter((item)=>(item.group === group))
    if(filteredData.length === 0){
      setData(projectData)
    } else{
      setData(filteredData)
    } 
  }
  return (
    <div className="w-full m-auto lg:pb-10" id="projects">
      <h1 className="font-poppins text-6xl font-extrabold text-center mt-12 mb-4 lg:my-1">
        <span className="text-orange-400 underline">PROJ</span>ECTS
      </h1>
      <div className="flex flex-wrap justify-center gap-x-12">
      {/* when ever function is called like loadProject(group) it must not be direct but as a callback */}
      {groups.map((group, index)=>(
            <button key={index} onClick={() => loadProject(group)} className={` ${active===group ? "text-orange-600 bg-gray-900" : "text-gray-100 bg-gray-700" } hover:text-orange-600 hover:bg-gray-900 py-2 px-4 rounded-lg text font-semibold mt-6`}>{group}</button>
            ))}
      </div>
      
      <div className="flex flex-wrap justify-center m-auto my-8 gap-6 lg:gap-16 xl:gap-6 h-full">       
        {data.slice(0,visibleProjects).map((item) => (
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
              {item.group}
            </h4>
            <div
              className="mt-6 text-center w-[70%] sm:w-[65%] m-auto  border-2 border-orange-500 hover:bg-orange-500 cursor-pointer font-poppins text-white px-4 py-1"
              onClick={() => setProject(item)}
            >
              Read More...
            </div>
          </div>
        ))}
      </div>
      <div className={`flex justify-center ${loadMoreButtonDiv} mb-8`}><button onClick={loadMore} className="p-2 px-12 bg-orange-600 hover:bg-black font-bold text-gray-100 text-sm" >Load More...</button></div>
    </div>
  );
}

export default Projects;
