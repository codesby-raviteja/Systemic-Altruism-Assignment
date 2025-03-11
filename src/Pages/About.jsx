import React from "react"
import HEADS from "../assets/heads.png"
import FANS from "../assets/fans.png"
import GROWTH from "../assets/growth.png"

function About() {
  return (
    <div className="grid lg:grid-cols-2 lg:grid-rows-2 min-h-[calc(100vh-260px)]">
      <div className="col-span-2 flex lg:items-center lg:justify-center flex-col">
        <h2 className="text-3xl md:text-5xl font-bold pt-10 text-blue-600 text-center ">
          Communion Hub
        </h2>
        <p className="text-lg md:text-2xl font-medium py-2 text-center text-gray-700/90">
          Bridging gaps between faiths with tech and a dash of fun!
        </p>
        <p className="text-2xl md:text-4xl font-medium py-2 text-center text-[#032aac]">
          Unite, Innovate, Connect, Inspires Together
        </p>
      </div>

      <div className="col-span-2 my-10 grid lg:grid-cols-3 bg-[#1e1e1ec0] p-2 px-4 text-[#c9c9c9] rounded">
        <div className="lg:col-span-1 text-center flex justify-center items-center">
          <p className="text-xl py-8 font-medium">
            Communion is not just another platform—it's a vibrant space that
            unites diverse faiths, beliefs, and traditions. By promoting
            collaboration and connection, we're fostering a world where
            differences become strengths and unity becomes the norm.
          </p>
        </div>
        <div className="lg:col-span-2 flex flex-col lg:flex-row gap-4 p-6 ">
          <div className=" py-4 px-6 shadow-lg flex-1 rounded-xl bg-[#929090fd] text-[#c9c9c9]">
            <img src={HEADS} alt="" />
            <p className="text-xl text-black/80 font-medium">
              Unifying Communities
            </p>
            <p className="font-medium text-white">
              Communion bridges diverse religious communities, becoming the
              social glue for faiths,
            </p>
          </div>
          <div className=" py-4 px-6 shadow-lg flex-1 rounded-xl bg-[#929090fd] text-[#c9c9c9]">
            <img src={FANS} alt="" />
            <p className="text-xl text-black/80 font-medium">
              Innovative and Fun
            </p>
            <p className="font-medium text-white">
              Experience faith in a fresh way through our interactive features,
              engaging events, and modern approach to....
            </p>
          </div>
          <div className=" py-4 px-6 shadow-lg flex-1 rounded-xl bg-[#929090fd] text-[#c9c9c9]">
            <img src={GROWTH} alt="" />
            <p className="text-xl text-black/80 font-medium">Promoting Unity</p>
            <p className="font-medium text-white">
              We foster understanding and harmony between different faith
              communities through shared experiences and ...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
