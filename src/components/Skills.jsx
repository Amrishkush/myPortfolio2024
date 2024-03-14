
import { skillsData } from "../Data/Data"
import SkillCards from "./SkillCards"

let skills = skillsData

function Skills() {
  return (
    <div >
            {skills.map((item, index)=>(
                <div key={index} className="lg:flex justify-around my-3 bg-orange-500 text-gray-100">
                <h3 className="lg:w-[50%] m-auto text-7xl text-center">{item.type}</h3>
                <SkillCards list={item.lists}/>
                </div>
            ))}
    </div>
  )
}

export default Skills