import React, { createContext, ReactNode, useContext, useState } from "react"
import { addPersonPropsTypes, personsContextType, personType } from "../types/personTypes"

const PersonsContext = createContext<personsContextType | null>(null)

export const usePersonsContext = useContext(PersonsContext)


export default function PersonsContextProvider({ children }: { children: ReactNode }) {

  const [persons, setPersons] = useState<personType[]>([])

  function addPerson({ id, name, gender }: addPersonPropsTypes) {
    setPersons(persons => [...persons, { id, name, gender }])
  }



  return (
    <PersonsContext.Provider value={{
      persons,
      addPerson
    }} >
      {children}
    </PersonsContext.Provider>
  )
}