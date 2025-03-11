import React from "react"

function EventsFilter({ category, setCategory }) {
  const filterOpitions = ["All", "Religious", "Social", "Charity"]
  return (
    <div className="my-10  flex  gap-3 sm:gap-6">
      {filterOpitions.map((option) => (
        <button
          key={option}
          className={`${
            category === option.toLocaleLowerCase()
              ? "bg-blue-500/90 text-white"
              : "bg-blue-400/30"
          } text-sm sm:text-base py-1 px-4 ms:px-6 shadow-2xs rounded-2xl  flex items-center justify-center  cursor-pointer font-medium `}
          onClick={() => setCategory(option.toLocaleLowerCase())}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export default EventsFilter
