import { useEffect } from "react"
import { Link } from "react-router"

function MobileNavbar({ openMobileMenu, setOpenMobileMenu }) {
  const closeMenu = () => {
    setOpenMobileMenu(false)
  }

  return (
    <div className=" sm:hidden ">
      <button
        className="text-3xl font-semibold cursor-pointer"
        onClick={() => setOpenMobileMenu(true)}
      >
        &#9776;
      </button>
      <nav
        className={`fixed z-100 w-[70%] overflow-x-hidden flex flex-col bg-gray-600   p-8 pt-12 gap-y-4 ml-auto inset-0  transition-all duration-200 ease-in-out ${
          openMobileMenu ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <button
          className="absolute top-2 right-6 text-white text-4xl focus:outline-none cursor-pointer"
          aria-label="close menu"
          onClick={closeMenu}
        >
          &times;
        </button>
        <Link
          to={"/"}
          className="text-lg font-medium text-white  px-2 rounded py-1 hover:text-red-400 hover:bg-gray-400/40 "
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to={"/about"}
          className="text-lg font-medium text-white  px-2 rounded py-1 hover:text-red-400 hover:bg-gray-400/40"
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          to={"/events"}
          className="text-lg font-medium text-white  px-2 rounded py-1 hover:text-red-400 hover:bg-gray-400/40"
          onClick={closeMenu}
        >
          Events
        </Link>
      </nav>
    </div>
  )
}

export default MobileNavbar
