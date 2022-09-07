import CreatePerson from "./CreatePerson"
import CreateRelation from "./CreateRelation"

function Sidebar() {

  return (
    <div className="h-full w-3/12 bg-gray-500" >
      <div className="p-3" >
        <h2 className="text-xl" >
          Create Person
        </h2>
        <CreatePerson />
      </div>

      <div className="p-3" >
        <h2 className="text-xl" >
          Create relation
        </h2>
        <CreateRelation />
      </div>
    </div>
  )
}

export default Sidebar