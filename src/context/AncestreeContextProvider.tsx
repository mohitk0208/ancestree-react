import { createContext, ReactNode, useContext, useState } from "react";
import { ancestreeContextType, genderTypes, personType, relationNameTypes, relationType } from "../types/ancestreeTypes";


const AncestreeContext = createContext<ancestreeContextType>({
  persons: [],
  relations: [],
  addPerson() { },
  addRelation() { }
})

export const useAncestreeContext = () => useContext(AncestreeContext)




export default function AncestreeContextProvider({ children }: { children: ReactNode }) {

  const [persons, setPersons] = useState<personType[]>([
    {
      "id": "3f02a8d1-d150-49cf-87fa-6d8c06e0b0f4",
      "name": "mohit",
      "gender": genderTypes.MALE
    },
    {
      "id": "1d755cf9-3e1e-43e4-9ccd-dfddf11e9944",
      "name": "arvind kumar singh",
      "gender": genderTypes.MALE
    },
    {
      "id": "3dd1021d-8001-4d18-8944-b8fc31bb5144",
      "name": "sushila devi",
      "gender": genderTypes.FEMALE
    },
    {
      "id": "a3612abf-0edd-42e6-b3aa-6d9ab288d34c",
      "name": "Rohit",
      "gender": genderTypes.MALE
    }
  ])

  const [relations, setRelations] = useState<relationType[]>([
    {
      "from": "1d755cf9-3e1e-43e4-9ccd-dfddf11e9944",
      "relationName": relationNameTypes.HUSBAND,
      "to": "3dd1021d-8001-4d18-8944-b8fc31bb5144"
    },
    {
      "from": "3dd1021d-8001-4d18-8944-b8fc31bb5144",
      "relationName": relationNameTypes.MOTHER,
      "to": "3f02a8d1-d150-49cf-87fa-6d8c06e0b0f4"
    },
    {
      "from": "3dd1021d-8001-4d18-8944-b8fc31bb5144",
      "relationName": relationNameTypes.MOTHER,
      "to": "a3612abf-0edd-42e6-b3aa-6d9ab288d34c"
    }
  ])

  function addRelation(from: string, relationName: relationNameTypes, to: string) {
    setRelations(relations => [...relations, { from, relationName, to }])
  }


  function addPerson(id: string, name: string, gender: genderTypes) {
    setPersons(persons => [...persons, { id, name, gender }])
  }


  return (
    <AncestreeContext.Provider value={{
      persons,
      relations,
      addPerson,
      addRelation
    }}>
      {children}
    </AncestreeContext.Provider>

  )
}