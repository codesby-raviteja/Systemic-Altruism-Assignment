import { useEffect } from "react"
import { Link } from "react-router"

function MobileNavbar({ openMobileMenu, setOpenMobileMenu }) {


    

  return (
    <div className=" sm:hidden ">
      <button
        className="text-3xl font-semibold cursor-pointer"
        onClick={() => setOpenMobileMenu(true)}
      >
        &#9776;
      </button>
      <nav
        className={`fixed z-100 w-[70%] overflow-x-hidden flex flex-col bg-red-300   p-8 pt-12 gap-y-4 ml-auto inset-0  transition-all duration-200 ease-in-out ${
          openMobileMenu ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <button
          className="absolute top-2 right-6 text-white text-4xl focus:outline-none cursor-pointer"
          aria-label="close menu"
          onClick={() => setOpenMobileMenu(false)}
        >
          &times;
        </button>
        <Link
          to={"/"}
          className="text-lg font-medium text-gray-600 px-2 rounded py-1 hover:text-gray-800 hover:bg-gray-600/20 "
        >
          Home
        </Link>
        <Link
          to={"/about"}
          className="text-lg font-medium text-gray-600 px-2 rounded py-1 hover:text-gray-800 hover:bg-gray-600/20"
        >
          About
        </Link>
        <Link
          to={"/events"}
          className="text-lg font-medium text-gray-600 px-2 rounded py-1 hover:text-gray-800 hover:bg-gray-600/20"
        >
          Events
        </Link>
      </nav>
    </div>
  )
}

export default MobileNavbar
