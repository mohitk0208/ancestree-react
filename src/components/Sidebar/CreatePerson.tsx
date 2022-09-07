import { useState } from "react"
import { v4 as uuidV4 } from "uuid"
import { useAncestreeContext } from "../../context/AncestreeContextProvider"
import { genderTypes } from "../../types/ancestreeTypes"

function CreatePerson() {

  const [name, setName] = useState("")
  const [gender, setGender] = useState<string>("")
  const [error, setError] = useState("")

  const { addPerson } = useAncestreeContext()


  function handleAddPerson() {
    if (name === "") {
      setError("Name is Compulsory.")
      return
    }

    if (gender === "") {
      setError("Gender is Compulsory.")
      return
    }
    setError("")

    addPerson(uuidV4(), name, gender as genderTypes)
  }


  return (
    <div className="flex flex-col" >
      <div className="w-full p-2">
        <p className="mb-1">
          Name
        </p>
        <input className="w-full p-1 rounded-sm" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="w-full p-2" >
        <p className="mb-1">
          Gender
        </p>
        <select
          className="w-full p-1 rounded-sm outline-none cursor-pointer"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          defaultValue=""
          required >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

      </div>

      <div className="text-red-500">
        {error}
      </div>

      <div className="" >
        <button className="w-full bg-green-500 p-2 mt-2 text-lg rounded-md text-white" type="button" onClick={handleAddPerson} >
          Add Person
        </button>
      </div>

    </div>
  )
}

export default CreatePerson