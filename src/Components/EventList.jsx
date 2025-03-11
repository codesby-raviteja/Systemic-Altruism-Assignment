import React from "react"
import Event from "./Event"

function EventList({ Events, category }) {
  
  let filteredData = Events.filter(
    (event) => event?.category?.toLowerCase() === category?.toLowerCase()
  )

  if (filteredData.length === 0) {
    filteredData = Events
  }

  return (
    <div className="grid grid-auto-cols  gap-4 py-4 ">
      {filteredData?.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  )
}

export default EventList
