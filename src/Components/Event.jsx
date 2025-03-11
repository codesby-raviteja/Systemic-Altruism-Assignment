import React from "react"

function Event({ event }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const month = months[event?.date.split("-")[1]-1]
  const dayAndYear = event?.date.split("-")[2] + "-" + event?.date.split("-")[0]
  return (
    <div className="w-full p-3 sm:p-6 border border-gray-300 space-y-1.5 bg-[#f8f7f7]  shadow-md rounded animate-event-up">
      <div className="flex justify-between text-lg font-medium ">
        <h3>{event?.title}</h3>
        <span className="bg-[#2cbcf13d] px-4 text-base flex items-center justify-center text-[#0066ec] rounded-2xl">
          {event.category}
        </span>
      </div>
      <p className="line-clamp-3">{event?.description}</p>
      <p>
        {month}-{dayAndYear}{" "}
      </p>
      <p>{event.location}</p>
      
      <button className="py-2 inline-block bg-gray-600 t font-medium px-8 text-white mx-auto rounded-full cursor-pointer my-2 hover:scale-105 transistion-all duration-200 hover:bg-gray-700 ease-in-out">
        View Details
      </button>
    </div>
  )
}

export default Event
