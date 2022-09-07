import React from "react"
import Ancestree from "./components/Ancestree"
import Sidebar from "./components/Sidebar";
import AncestreeContextProvider from "./context/AncestreeContextProvider";


function App() {

  return (
    <AncestreeContextProvider>
      <div className="flex flex-row w-screen h-screen bg-gray-200" >
        <Ancestree />
        <Sidebar />
      </div>
    </AncestreeContextProvider>

  );
}

export default App
