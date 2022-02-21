import React from 'react'; //optional
import { useState , useEffect} from "react";
import { useParams } from 'react-router-dom';

function PropertyPage(){
  let {id} = useParams();
  // const [properties, setProperties] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [property_type, setPropertyType] = useState("");
  const [check_in_time, setCheckInTime] = useState("");
  const [check_out_time, setCheckOutTime] = useState("");
  const [price_per_night, setPricePerNight] = useState("");
  const [room_size, setRoomSize] = useState("");
  const [meal_plan, setMealPlan] = useState("");
  const [pampering_session, setPamperingSession] = useState("");
  const [vet_visit, setVetVisit] = useState("");
  const [daily_hairbrushing, setDailyHairBrushing] = useState("");
  const [for_cat, setForCat] = useState("");
  const [for_dog, setForDog] = useState("");
  // const [userId,setUserId]=useState(null)
  const baseUrl = 'http://localhost:8080';
  useEffect(() => {
    getProperties();
  }, [])
  const getProperties = () => {
    fetch(`${baseUrl}/api/properties/${id}`).then((result) => {
      result.json().then((resp) => {
        // setProperties(resp)
        setName(resp[0].name)
        setDescription(resp[0].description)
        setLocation(resp[0].location)
        setImage(resp[0].image)
        setPropertyType(resp[0].property_type)
        setCheckInTime(resp[0].check_in_time)
        setCheckOutTime(resp[0].check_out_time)
        setPricePerNight(resp[0].price_per_night)
        setRoomSize(resp[0].room_size)
        // setUserId(resp[0].id)
        setMealPlan(resp[0].meal_plan)
        setPamperingSession(resp[0].pampering_session)
        setVetVisit(resp[0].vet_visit)
        setDailyHairBrushing(resp[0].daily_hairbrushing)
        setForCat(resp[0].for_cat)
        setForDog(resp[0].for_dog)
      })
    })
  }

  // function selectProperty(id)
  // {
  //   let item=properties[id-1];
  //   setName(item.name)
  //       // setUserId(item.id)
  // }
  const stringToBoolean = function(string){
    switch(string.toLowerCase().trim()){
        case "true": case "yes": case "1": return true;
        case "false": case "no": case "0": case null: return false;
        default: return Boolean(string);
    }
}
  function updateUser()
  {
    let item={name, description, location, image, property_type, check_out_time, check_in_time, price_per_night, room_size, meal_plan, pampering_session, vet_visit, daily_hairbrushing, for_cat, for_dog}
    console.warn("item",item)
    fetch(`${baseUrl}/api/properties/${id}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getProperties()
      })
    })
  }
  return (
    <div className="app__createproperty">
      <h1>Update Property Details </h1>
        
      <div className="property_form">
      <div className="input_box">
          <span className="details">Property Name</span>
      <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
      </div>
          <br/>
          <div className="input_box">
          <span className="details">Property Description</span>
        <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} /> <br/>
</div>
<div className="input_box">
<span className="details">Property Location</span>
        <input type="text" value={location} onChange={(e)=>{setLocation(e.target.value)}} /> <br /><br/>
</div>
<div className="input_box">
<span className="details">Property Image</span>
        <input type="text" value={image} onChange={(e)=>{setImage(e.target.value)}} /> <br /><br />
        <img src={image} className="propertyTile__img" alt=""/>
          

          <br/>
          </div>
          <div className="input_box">
          <span className="details">Property Type</span>
        <input type="text" value={property_type} onChange={(e)=>{setPropertyType(e.target.value)}} /> <br/>
          </div>
          <div className="input_box">
          <span className="details">Check in Time</span>
        <input type="text" value={check_in_time} onChange={(e)=>{setCheckInTime(e.target.value)}} /> <br/>
          </div>
          <div className="input_box">
          <span className="details">Check out Time</span>
        <input type="text" value={check_out_time} onChange={(e)=>{setCheckOutTime(e.target.value)}} /> <br/>
</div>
<div className="input_box">
<span className="details">Price per night</span>
        <input type="text" value={price_per_night} onChange={(e)=>{setPricePerNight(e.target.value)}} /> <br/>
          </div>
          <div className="input_box">
          <span className="details">Size of the Room</span>
        <input type="text" value={room_size} onChange={(e)=>{setRoomSize(e.target.value)}} /> <br/>
</div>
<div className="input_box">
<span className="details">Is there a meal plan ?</span>
          <select  className="pet-form-species-container" onChange={(e)=>{setMealPlan(e.target.value)}}>
            <option value="" disabled="disabled" selected="selected">Is there a meal plan?</option>
            <option value={stringToBoolean("true")}>Yes</option>
            <option value={stringToBoolean("false")}>No</option>
          </select>
          <br/>
          </div>
          <div className="input_box">
          <span className="details">Is there a pampering session ?</span>
        <select className="pet-form-species-container" onChange={(e)=>{setPamperingSession(e.target.value)}}>
            <option value="" disabled="disabled" selected="selected">Is there a pampering session?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <br/>
          </div>
          <div className="input_box">
          <span className="details">Are there vet visits ?</span>
          <select  className="pet-form-species-container" onChange={(e)=>{setVetVisit(e.target.value)}}>
            <option value="" disabled="disabled"selected="selected" >Are there vet visits?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <br/>
          </div>
          <div className="input_box">
          <span className="details">Is there daily hairbrushing ?</span>
          <select className="pet-form-species-container" onChange={(e)=>{setDailyHairBrushing(e.target.value)}}>
            <option value="" disabled="disabled" selected="selected">Is there a daily hairbrushing?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <br/>
          </div>
          <div className="input_box">
          <span className="details">Is it for cats?</span>
          <select className="pet-form-species-container" onChange={(e)=>{setForCat(e.target.value)}}>
            <option value="" disabled="disabled" selected="selected">Is it for cats?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <br/>
          </div>
          <div className="input_box">
          <span className="details">Is it for dogs?</span>
          <select  className="pet-form-species-container" onChange={(e)=>{setForDog(e.target.value)}}>
            <option value="" disabled="disabled" selected="selected">Is it for dogs?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <br/>
</div>
        <button onClick={updateUser} value="Update Property" className="form_button">Update Property</button>  
      </div>
      <br/>
      <br/>
    </div>
    
  );
}
export default PropertyPage;