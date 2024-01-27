
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import DetailsModal from "./components/DetailsModal";
import SocialBar from "./components/SocialBar";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [component, setComponent] = useState("home");
  const [project, setProject] = useState();
  return (
    <>
      <div className=" w-full xl:w-full h-auto background overflow-auto">
        {/* if we write below h-[2000px] it will not work because it must require that much content of length 2000px so its necessary but h-screen will use as 100vh if more than that it will overflow auto will be able to move  */}
        {project && <DetailsModal project={project} setProject={setProject} />}
        <div
          className="h-screen bg-white overflow-auto relative"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.90)" }}
        >
          <div className="sticky top-0 z-50">
            <Sidebar setComponent={setComponent} component={component} />
          </div>
          <div className="font-amsterdamFour font-thin text-center tracking-wider text-black sm:text-[3vw] md:text-[2vw] text-[4vw] sticky top-0 py-4 z-0">
            Amrish
          </div>
          <div className="fixed top-6 right-0">
            <SocialBar />
          </div>

          <div className=" py-[1%] lg:w-[1024px] xl:w-[1240px] 2xl:w-full h-screen opacity-100 m-auto">
            {/* above overflow auto while making modal  */}
            <div className="block lg:hidden">
              <Home />
              <Portfolio />
              <Projects setProject={setProject} />
              <Contact />
            </div>
            <div className="hidden lg:block">
              {component === "home" && <Home />}
              {component === "portfolio" && <Portfolio />}
              {component === "projects" && <Projects setProject={setProject} />}
              {component === "contact" && <Contact />}
            </div>
            
          </div>
        </div>
        <div className="fixed bottom-0 w-full">
        <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
