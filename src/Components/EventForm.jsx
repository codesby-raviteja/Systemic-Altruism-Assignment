import React, { useState } from "react"
import { valitateForms } from "../Constant"

function EventForm({ openEventFrom, setOpenEventForm }) {
  const [eventDetails, setEventDetails] = useState({
    title: "",
    date: "",
    category: "",
    location: "",
    description: "",
  })

  const [Errors, setErrors] = useState({})

  const handleFormClosing = () => {
    setOpenEventForm(false)
    setEventDetails({
      title: "",
      date: "",
      category: "",
      location: "",
      description: "",
    })
    setErrors({})
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setEventDetails((prev) => ({ ...prev, [name]: value }))
    if (Errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const errors = valitateForms(eventDetails)
    if (Object.keys(errors).length > 0) {
      setErrors(errors)
      return
    }

    handleFormClosing()
  }

  return (
    <div
      className={` ${
        openEventFrom ? "flex" : "hidden"
      } fixed inset-0  items-center justify-between `}
    >
      <div
        className="absolute z-100 inset-0 bg-gray-600/30"
        onClick={handleFormClosing}
      ></div>

      <form
        className="w-full animate-sca z-200 max-w-[560px] bg-white   mx-auto rounded-xl shadow-lg  px-6 py-8"
        onSubmit={onSubmit}
      >
        <h3 className="text-2xl font-semibold text-center my-4">
          Enter the Event Details
        </h3>
        <div className="flex gap-4 my-2">
          <div className="w-full">
            <div className="flex flex-col gap-1 w-full  ">
              <label htmlFor="title" className="font-medium">
                Enter Title
              </label>
              <input
                className="w-full p-1 px-2 h-10 rounded-sm bg-white border border-gray-300"
                type="text"
                id="title"
                placeholder="Title"
                name="title"
                value={eventDetails.title}
                onChange={handleChange}
              />
            </div>
            {Errors?.title ? (
              <p className="text-base text-red-500">{Errors.title}</p>
            ) : (
              <p className="text-base h-5 "></p>
            )}
          </div>
        </div>
        <div className=" ">
          <div className="flex flex-col gap-1 w-full rounded-sm mt-2">
            <label className="font-medium" htmlFor="date">
              Date
            </label>
            <input
              className="w-full p-1 px-2  h-10  bg-white border border-gray-300"
              id="date"
              type="date"
              name="date"
              value={eventDetails.date}
              onChange={handleChange}
            />
          </div>
          {Errors.date ? (
            <p className="text-base text-red-500">{Errors.date} </p>
          ) : (
            <p className="text-base h-5 "></p>
          )}
        </div>

        <div className=" ">
          <div className="flex flex-col gap-1 w-full rounded-sm">
            <label className="font-medium" htmlFor="location">
              Location
            </label>
            <input
              className="w-full p-1 px-2 h-10  bg-white border border-gray-300"
              placeholder="Enter the Location"
              id="location"
              autoComplete="on"
              name="location"
              value={eventDetails.location}
              onChange={handleChange}
            />
          </div>
          {Errors.location ? (
            <p className="text-base text-red-500 ">{Errors.location}</p>
          ) : (
            <p className="text-base h-5 "></p>
          )}
        </div>

        <div className=" ">
          <div className="flex flex-col gap-1 w-full rounded-sm">
            <label className="font-medium" htmlFor="description">
              Description
            </label>
            <textarea
              className="w-full p-1 px-2   bg-white border border-gray-300"
              placeholder="Type here..."
              cols={20}
              rows={2}
              autoComplete="on"
              id="description"
              name="description"
              value={eventDetails.description}
              onChange={handleChange}
            />
          </div>
          {Errors.description ? (
            <p className="text-base text-red-500 ">{Errors.description}</p>
          ) : (
            <p className="text-base h-5 "></p>
          )}
        </div>

        <div className=" ">
          <label htmlFor="category" className="font-medium">
            Caterory
          </label>
          <select
            className="p-1 w-full h-10  bg-white border border-gray-300 "
            name="category"
            id="category"
            value={eventDetails.category}
            onChange={handleChange}
          >
            <option className="" value="" hidden>
              Select the category
            </option>
            <option className="" value="Religious">
              Religious
            </option>
            <option className="" value="Social">
              Social
            </option>
            <option className="" value="Charity">
              Charity
            </option>
          </select>
          {Errors.category ? (
            <p className="text-base text-red-500">{Errors.category}</p>
          ) : (
            <p className="text-base h-5 "></p>
          )}
        </div>

        <div className="flex justify-between">
          <button
            className="mt-5 bg-blue-400/20 text-black px-4 py-2 rounded font-medium cursor-pointer"
            type="button"
            onClick={handleFormClosing}
          >
            Cancel
          </button>
          <button className="inline-block mt-5 bg-blue-400 text-black px-4 py-2 rounded font-medium ml-auto cursor-pointer">
            Add Event
          </button>
        </div>
      </form>
    </div>
  )
}

export default EventForm
