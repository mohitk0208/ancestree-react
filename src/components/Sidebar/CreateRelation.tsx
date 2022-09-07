import { useState } from "react"
import { useAncestreeContext } from "../../context/AncestreeContextProvider"
import { relationNameTypes } from "../../types/ancestreeTypes"

function CreateRelation() {

  const [from, setFrom] = useState<string>("")
  const [to, setTo] = useState<string>("")
  const [relationName, setRelationName] = useState<string>("")
  const [error, setError] = useState("")


  const { addRelation } = useAncestreeContext()


  function handleAddRelation() {
    if (from === "") {
      setError("from is Compulsory.")
      return
    }

    if (relationName === "") {
      setError("relation Name is Compulsory.")
      return
    }

    if (to === "") {
      setError("to is Compulsory.")
      return
    }

    setError("")
    addRelation(from, relationName as relationNameTypes, to)


  }

  return (
    <div className="flex flex-col">
      <div className="w-full p-2">
        <p className="mb-1">
          From
        </p>
        <input className="w-full p-1 rounded-sm" type="text" value={from} onChange={(e) => setFrom(e.target.value)} />
      </div>

      <div className="flex w-full p-2" >
        <span className="mb-1 mx-1">
          is
        </span>
        <select
          className="flex-1 mx-2 p-1 rounded-sm outline-none cursor-pointer"
          value={relationName}
          onChange={(e) => setRelationName(e.target.value)}
          defaultValue="">
          <option value="">Select Relation Name</option>
          {Object.values(relationNameTypes).map(relationName => (
            <option value={relationName}>{relationName}</option>
          ))}
        </select>
        <span className="mx-1" >
          of
        </span>

      </div>

      <div className="w-full p-2">
        <p className="mb-1">
          To
        </p>
        <input className="w-full p-1 rounded-sm" type="text" value={to} onChange={(e) => setTo(e.target.value)} />
      </div>

      <div className="text-red-500 p-2">
        {error}
      </div>

      <div className="" >
        <button className="w-full bg-purple-500 p-2 mt-2 text-lg rounded-md text-white" type="button" onClick={handleAddRelation} >
          Add Relation
        </button>
      </div>

    </div>
  )

}

export default CreateRelation