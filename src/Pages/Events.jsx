import React, { useState } from "react"
import { list } from "../Constant"
import EventList from "../Components/EventList"
import EventForm from "../Components/EventForm"

function Events() {
  const [Events, setEvents] = useState(list)
  const [openEventFrom, setOpenEventForm] = useState(false)
  return (
    <section className="mt-10">
      <h2 className="text-2xl sm:text-4xl font-semibold text-center text-orange-300">
        We Helped Communities Connect & Flourish
      </h2>
      <p className="text-lg  sm:text-2xl font-medium text-center mt-4">
        <span>✦</span> Upcoming Events <span>✦</span>
      </p>
      <div className="flex justify-between py-4 items-center mt-4">
        <span className="text-2xl sm:text-3xl font-semibold">Events</span>
        <button
          className="text-base sm:text-lg text-white py-2 px-4 rounded font-medium bg-[rgb(2,132,199)] cursor-pointer hover:scale-105 hover:bg-[rgb(3, 95, 143)] transistion-scale duration-150 ease-in-out "
          onClick={() => setOpenEventForm((prev) => !prev)}
        >
          Add New Event
        </button>
      </div>
      <EventForm
        openEventFrom={openEventFrom}
        setOpenEventForm={setOpenEventForm}
      />
      <EventList Events={Events} />
    </section>
  )
}

export default Events
