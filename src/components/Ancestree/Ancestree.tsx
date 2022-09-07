import { useState } from "react"
import ReactFlow, { Node } from "react-flow-renderer"
import { useAncestreeContext } from "../../context/AncestreeContextProvider"
import { initialEdges, initialNodes } from "../../data"
import { createEdgesFromRelations, createNodesFromPersons } from "../../utils/functions"

const Ancestree = () => {

  const { persons, relations } = useAncestreeContext()
  // const [nodes, setNodes] = useState(createNodesFromPersons(persons))
  // const [edges, setEdges] = useState(createEdgesFromRelations(relations))


  return (
    <div className="flex-1 h-full bg-green-200 " >
      {/* <ReactFlow nodes={nodes} edges={edges} fitView /> */}
      <pre>
        {JSON.stringify(persons, null, 2)}
      </pre>
      Relations
      <pre>
        {JSON.stringify(relations, null, 2)}
      </pre>
    </div>
  )
}


export default Ancestree