import { portfolioData, techSkills} from "../Data/Data";

const data = portfolioData;
const techData = techSkills;

function Portfolio() {

  const conicGradientStyle = (angle)=> ({
    background: `conic-gradient(#f97316 ${angle * 3.6}deg, #333333 0deg)`,
  });
  
  return (
    <div className="" id="about">
      <div className="lg:flex">
        <div className="w-[95%] lg:w-[40%] m-auto p-5 hidden lg:block">
          <img
            src="Images\myFullImage.jpg"
            alt=""
            className="sm:w-[40%] lg:w-[80%] m-auto rounded-full border-2 border-gray-500"
          />
          <h3 className="text-center font-poppins font-bold text-sm my-3">
            Full Stack Web Developer
          </h3>
          <h1 className="text-center font-poppins font-bold text-3xl sm:text-4xl my-3">
            Amrish Pratap Singh
          </h1>
        </div>
        <div className="w-[95%] sm:w-[85%] lg:w-[60%] m-auto">
          <h1 className="font-poppins font-extrabold text-6xl text-center mt-16 lg:text-left">
            <span className="text-orange-400">ABOUT</span> ME
          </h1>
          <p className="w-[98%] font-poppins text-center sm:text-left text-[16px] my-8">
          Hello! I am Amrish, a dedicated full-stack developer. Over the past year, I have immersed myself in coding, gaining hands-on experience in HTML, CSS, TailwindCSS, JavaScript, ReactJS for the Frontend, Node.js for the Backend, MongoDB for Database Management, and building complete applications using the MERN stack. <br /><br />
          
          As a former teacher of physics and science education turned into a Full-Stack-Developer, I bring a unique perspective to crafting user-friendly interfaces and enjoy solving complex problems. My journey includes the successful completion of several personal projects, showcasing my proficiency in creating dynamic and interactive web experiences. I am dedicated to continuous learning and growth as a front-end developer. <br /><br />

          Eager to contribute to innovative projects and collaborative teams, If you are seeking a passionate MERN stack developer with a solid grasp of Frontend technologies like ReactJS and backend technologies including Node.js, Express.js MongoDB. I am ready to bring my coding expertise to the next exciting challenge. <br />
            
          </p>
          <div className="xl:flex gap-24 justify-around w-[98%]">
            <ul>
              <li className="font-poppins my-3">
                <span className="font-bold font-poppins mx-4">Name: </span>{" "}
                Amrish Pratap Singh
              </li>
              <li className="font-poppins my-3">
                <span className="font-bold font-poppins mx-4">Birthday: </span>{" "}
                24 June 1994
              </li>
              <li className="font-poppins my-3">
                <span className="font-bold font-poppins mx-4">Age: </span> 30
                Years
              </li>
              <li className="font-poppins my-3">
                <span className="font-bold font-poppins mx-4">Address: </span>{" "}
                Uttar Pradesh, India
              </li>
            </ul>
            <ul>
              <li className="font-poppins my-3">
                <span className="font-bold font-poppins mx-4 mr-2">
                  Phone:{" "}
                </span>{" "}
                +918353942789 , +917905319717
              </li>
              <li className="font-poppins my-3">
                <span className="font-bold font-poppins mx-4">Email: </span>{" "}
                amrishkush@gmail.com
              </li>
              <li className="font-poppins my-3">
                <span className="font-bold font-poppins mx-4">LinkedIn: </span>{" "}
                amrishkush
              </li>
              <li className="font-poppins my-3">
                <span className="font-bold font-poppins mx-4">Job: </span>{" "}
                Available[On-site / Remote]
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-center text-6xl font-poppins font-extrabold my-8">
          <span className="text-orange-400 underline">SKI</span>LLS
        </h1>
        <div className="lg:flex">
        {techData.map((item)=>(
            <div className="w-full sm:w-[80%] py-4 sm:p-4 m-auto " key={item.id}>
            <div className="bg-gray-900 w-[96%] md:w-[80%] xl:w-[70%] p-8 rounded-3xl m-auto  ">
              <h3 className="text-center my-3 text-lg font-poppins text-gray-300">
                {item.stack}
              </h3>
              <div className="bg-[#333333] w-full rounded-full m-auto h-[16px]  ">
                <div className= {`bg-orange-500 text-right text-xs text-black h-[16px] rounded-full w-[${item.performance}] pr-1 font-poppins`}>
                  {item.performance}
                </div>
              </div>
              <div className="flex gap-4">
              {item.tech.map((skill)=>(
                <div
                  className="bg-gray-900 rounded-full m-auto mt-10 w-20 sm:w-24 h-20 sm:h-24 flex animate-pulse"
                  style={conicGradientStyle(skill.performance)}
                  key={skill.id}
                >
                  <div className="bg-gray-900 rounded-full w-16 sm:w-20 h-16 sm:h-20 m-auto flex">
                    <span className="m-auto  text-center text-[11px] text-white font-poppins">
                      {skill.performance}% <br />
                      {skill.techName}
                    </span>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className="lg:flex gap-4">
      {data.map((item)=>(
        <div className="w-[96%] sm:w-[70%] lg:w-[45%] my-6 m-auto" key={item.id}>
          <h2 className="text-4xl text-center font-poppins font-extrabold mb-5">
            {item.dataName}
          </h2>

          {item.data.map((card)=>(
            <div className="bg-gray-900 p-4 rounded-2xl my-4" key={card.id}>
            <div className="inline text-white bg-orange-500 rounded-full px-3 py-1">
              {card.year}
            </div>
            <div className="mt-3 text-gray-200">{card.course || card.designation}</div>
            <div className="text-gray-200">{card.institute || card.organization}</div>
          </div>
          ))}
        </div>
      ))}
      </div>
    </div>
  );
}

export default Portfolio;
