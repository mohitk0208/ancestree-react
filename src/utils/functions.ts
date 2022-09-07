import { Edge, Node } from "react-flow-renderer";
import { personType, relationType } from "../types/ancestreeTypes";

export function createNodesFromPersons(persons: personType[]): Node[] {

  return persons.map((person, index) => ({
    id: person.id,
    data: {
      label: `${person.id} ${person.name} ${person.gender}`
    },
    position: {
      x: 0,
      y: 0
    }
  }))

}



export function createEdgesFromRelations(relations: relationType[]): Edge[] {
  return relations.map(relation => ({
    id: `${relation.from}-${relation.to}`,
    source: relation.from,
    target: relation.to
  }))
}