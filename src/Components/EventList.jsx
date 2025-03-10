import React from "react"
import Event from "./Event"

function EventList({ Events }) {
  return (
    <div className="grid grid-auto-cols  gap-4 py-4 ">
      {Events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  )
}

export default EventList
