import "./App.css"
import Navbar from "./Components/Navbar"
import { Outlet } from "react-router"

function App() {
  return (
    <>
      <div>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
