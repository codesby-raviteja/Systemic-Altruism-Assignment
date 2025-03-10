export const list = [
  {
    id: 1,
    title: "Christmas Charity Drive",
    date: "04-15-2025",
    category: "Religious",
    description:
      "Join the ocational of the drive and connect with people and be a part of community",
  },
  {
    id: 2,
    title: "Maha Shivarathri Drive",
    date: "05-15-2025",
    category: "Religious",
    location: "Hyderabad",
    description:
      "Join the ocational of the drive and connect with people and be a part of community",
  },
  {
    id: 3,
    title: "Community Cleaning",
    date: "05-05-2025",
    category: "Social",
    location: "Hyderabad",
    description:
      "Join the ocational of the drive and connect with people and be a part of community",
  },
  {
    id: 4,
    title: "Save the Hungry",
    date: "04-25-2025",
    category: "Charity",
    location: "Hyderabad",
    description:
      "Join the ocational of the drive and connect with people and be a part of community",
  },
]




export const valitateForms = (eventDetails) =>{

    const error = {}
    if(eventDetails?.title.length < 5){
        error.title ="Title cannot be less than 5 characters"
    }
    if(eventDetails?.date === ""){
        error.date="Date is required"
    }else if(new Date(eventDetails?.date) < new Date()){
              error.date="Date must be in future"
    }
    if(eventDetails?.category === ""){
        error.category= "Catergory must be selected"
    }
    
    if(eventDetails?.location === ""){
        error.location= "Please enter the Location"
    }
    if(eventDetails?.description.length < 20){
        error.description ="Description cannot be less than 20 characters"
    }else if(eventDetails?.description.length > 300){
        error.description ="Description must not be more than 300 characters"
    }
    return error
}