import React, { useEffect, useState } from "react"
import logo from "../assets/logo.png"
import { Link, NavLink } from "react-router"
import MobileNavbar from "./MobileNavbar"

function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 635) {
        setOpenMobileMenu(false)
      }
    }
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <header className="w-full py-1">
      <div className="max-w-7xl  py-3 sm:py-4 flex justify-between px-4 sm:px-6 items-center mx-auto">
        <Link to="/" className="w-40 sm:w-52 ">
          <img src={logo} alt="communion hub" className="w-full h-full" />
        </Link>
        <nav className="hidden sm:block space-x-8">
          <NavLink
            className={({ isActive }) =>
              (isActive && "text-blue-700") +
              " text-xl font-semibold hover:text-red-400"
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              (isActive && "text-blue-700") +
              " text-xl font-semibold hover:text-red-400"
            }
            to={"about"}
          >
            About
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              (isActive && "text-blue-700") +
              " text-xl font-semibold hover:text-red-400"
            }
            to={"events"}
          >
            Events
          </NavLink>
        </nav>

        <MobileNavbar
          openMobileMenu={openMobileMenu}
          setOpenMobileMenu={setOpenMobileMenu}
        />
      </div>
    </header>
  )
}

export default Navbar
