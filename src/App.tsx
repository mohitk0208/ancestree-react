import React from "react"
import Ancestree from "./components/Ancestree"


function App() {

  return (
    <div className="flex flex-row w-screen h-screen bg-gray-200" >
      <Ancestree />
      <div className="h-full w-3/12 bg-gray-500" >
      </div>
    </div>

  );
}

export default App
