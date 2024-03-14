


function SkillCards({list}) {
    console.log(list)
  return (
    <div className="flex justify-center gap-x-10 lg:w-[50%] bg-gray-900 text-gray-100 px-3 py-6 flex-wrap gap-y-6">
      {
        list.map((item, index) => (
          <div key={index} className="">
            < item.icon color = {item.color} size={60} className="m-auto" />
            <h6 className="text-center">{item.name}</h6>
          </div>
        ))}
    </div>
  )
}

export default SkillCards