import "./App.css"
import Navbar from "./Components/Navbar"
import { Outlet } from "react-router"

function App() {
  return (
    <>
      <div>
        <Navbar />
        <main className=" bg-gradient-to-b  from-[#012cbb21] to-[#2cbcf11c]">
          <div className="max-w-7xl min-h-[calc(100vh-78px)] mx-auto px-4 ">
          <Outlet />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
