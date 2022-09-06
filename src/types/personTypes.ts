export interface personType {
  id: number,
  name: string,
  gender: ['male', 'female']
}


export interface addPersonPropsTypes {
  id: number,
  name: string,
  gender: ['male', 'female']
}

export interface personsContextType {
  persons: personType[]
  addPerson: (props: addPersonPropsTypes) => void
}