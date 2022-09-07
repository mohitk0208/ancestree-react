
export enum genderTypes {
  MALE = "male",
  FEMALE = "female"
}

export enum relationNameTypes {
  FATHER = 'father',
  MOTHER = 'mother',
  SON = 'son',
  DAUGHTER = 'daughter',
  HUSBAND = 'husband',
  WIFE = 'wife'
}


export interface personType {
  id: string,
  name: string,
  gender: genderTypes
}


export interface relationType {
  from: string,
  relationName: relationNameTypes,
  to: string
}


export interface ancestreeContextType {
  persons: personType[],
  relations: relationType[],
  addPerson: (id: string, name: string, gender: genderTypes) => void,
  addRelation: (from: string, relationName: relationNameTypes, to: string) => void
}