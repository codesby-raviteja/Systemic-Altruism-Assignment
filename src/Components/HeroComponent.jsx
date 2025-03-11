import React from "react"
import arrow from "../assets/arrow.png"
import COMMUNITY_IMAGE_ONE from "../assets/communityImageOne.avif"
import COMMUNITY_IMAGE_TWO from "../assets/communityImageTwo.jpg"
import COMMUNITY_IMAGE_THREE from "../assets/communityImageThree.jpg"
import { Link } from "react-router"

function HeroComponent() {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-6 items-center w-full h-[calc(100vh-78px)]">
      <div className="lg:w-[50%] py-6 lg:-mt-16 animate-up">
        <h1 className="text-4xl text-center lg:text-5xl font-semibold my-6 bg-gradient-to-r py-1  from-[#012BBB] to-[#2cbdf1] bg-clip-text text-transparent ">
          “Connecting People Across Faiths & Interests”{" "}
        </h1>
        <p className="text-lg text-center font-medium max-w-lg  mx-auto text-gray-500 ">
          Join us in building a vibrant community where people of all faiths
          connect through meaningful events, shared support, and open dialogue.
          Together, we celebrate diversity, foster understanding, and create a
          more inclusive world!
        </p>
        <Link to={"/events"}>
          <button className="mt-8 flex gap-1 bg-blue-500 text-white text-base py-3 px-10 rounded-3xl mx-auto  font-medium transition relative  hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer">
            Explore Events <img src={arrow} alt="arrow" />
          </button>
        </Link>
      </div>
      <div className="w-full max-w-[800px] pb-5 mx-auto lg:w-[50%] relative -mt-10 lg:-mt-16 animate-left h-full">
        <div className=" w-64 md:w-80 xl:w-96  absolute  translate-x-5 sm:translate-x-30 translate-y-3 lg:translate-x-10 lg:translate-y-40   p-1 rounded-lg overflow-hidden bg-white cursor-pointer hover:z-10 hover:scale-105 transition-all duration-250 ease-in-out">
          <img src={COMMUNITY_IMAGE_ONE} alt="community" className="w-full" />
        </div>
        <div className="w-64 md:w-80 xl:w-96 absolute  translate-x-25 sm:translate-x-80 translate-y-30 lg:translate-x-50 lg:translate-y-70    p-1 rounded-lg overflow-hidden bg-white cursor-pointer hover:z-10 hover:scale-105 transition-all duration-250 ease-in-out">
          <img src={COMMUNITY_IMAGE_TWO} alt="community" />
        </div>
        <div className="w-64 md:w-80 xl:w-96 absolute  translate-x-5 sm:translate-x-40 translate-y-50 lg:translate-x-20 lg:translate-y-100    p-1 rounded-lg overflow-hidden bg-white cursor-pointer hover:z-10 hover:scale-105 transition-all duration-250 ease-in-out">
          <img src={COMMUNITY_IMAGE_THREE} alt="community" />
        </div>
      </div>
    </section>
  )
}

export default HeroComponent
