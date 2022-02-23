import React from 'react'; //optional
import { useState } from "react";
import { useAlert } from 'react-alert';
import { useNavigate} from "react-router-dom";
import axios from 'axios';


export default function createProperty(){
  const navigate = useNavigate();
  const alert = useAlert();
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

  
   const stringToBoolean = function(string){
        switch(string.toLowerCase().trim()){
            case "true": case "yes": case "1": return true;
            case "false": case "no": case "0": case null: return false;
            default: return Boolean(string);
        }
    }
    function create_property(e) {
      e.preventDefault();
      const owner_id = localStorage.getItem('user_id');
      const userObject = {name, description, location, image, property_type, check_out_time, check_in_time, price_per_night, room_size, meal_plan, pampering_session, vet_visit, daily_hairbrushing, for_cat, for_dog, owner_id};
      
      const baseUrl = 'http://localhost:8080';
      axios.post(`${baseUrl}/api/properties`, userObject)
          .then((res) => {
            alert.show('Property Created Successfully!')
        navigate('/admin');
          }).catch((error) => {
              console.log(error)
          });
    }

      
    
  
  return (
        <div className="app__createproperty">
          <h2 className="createproperty_title">Create Property</h2>
          <form  onSubmit={e => create_property(e)} className="property_form">
            <div className="input_box">
              <span className="details">Property Name</span>
              <input
                type="text"
                value={name} onChange={(e)=>{setName(e.target.value)}}
                className="pet-form-name-input"
                placeholder="Name" required/>
            </div>
              <br/>
              <div className="input_box">
              <span className="details">Property Description</span>
              <input
                type="text"
                value={description} onChange={(e)=>{setDescription(e.target.value)}}
                className="pet-form-name-input"
                placeholder="Description" required/>
    
              <br/>
    </div>
    <div className="input_box">
    <span className="details">Property Location</span>
              <input
                type="text"
                value={location} onChange={(e)=>{setLocation(e.target.value)}}
                className="pet-form-name-input"
                placeholder="Location" required/>
    
              <br/>
    </div>
    <div className="input_box">
    <span className="details">Property Image</span>
                <input type="text" value={image} onChange={(e)=>{setImage(e.target.value)}} className="pet-form-img" placeholder="Enter file url" required/>
                <img src={image} className="propertyTile__img" alt=""/>
              
    
              <br/>
              </div>
              <div className="input_box">
              <span className="details">Property Type</span>
              <input
                type="text"
                value={property_type} onChange={(e)=>{setPropertyType(e.target.value)}}
                className="pet-form-name-input"
                placeholder="Property Type" required/>
    
              <br/>
              </div>
              <div className="input_box">
              <span className="details">Check in Time</span>
              <input
                type="text"
                value={check_in_time} onChange={(e)=>{setCheckInTime(e.target.value)}}
                className="pet-form-name-input"
                placeholder="Check-in time" required/>
    
              <br/>
              </div>
              <div className="input_box">
              <span className="details">Check out Time</span>
              <input
                type="text"
                value={check_out_time} onChange={(e)=>{setCheckOutTime(e.target.value)}}
                className="pet-form-name-input"
                placeholder="Check-out time" required/>
    
              <br/>
    </div>
    <div className="input_box">
    <span className="details">Price per night</span>
              <input
                type="text"
                value={price_per_night} onChange={(e)=>{setPricePerNight(e.target.value)}}
                className="pet-form-name-input"
                placeholder="Price per night" required/>
    
              <br/>
              </div>
              <div className="input_box">
              <span className="details">Size of the Room</span>
              <input
                type="text"
                value={room_size} onChange={(e)=>{setRoomSize(e.target.value)}}
                className="pet-form-name-input"
                placeholder="Room size" required/>
    
              <br/>
    </div>
    <div className="input_box">
    <span className="details">Is there a meal plan ?</span>
              <select  className="pet-form-species-container" onChange={(e)=>{setMealPlan(
               stringToBoolean( e.target.value))}}>
                <option value="" disabled="disabled" selected="selected">Is there a meal plan?</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
    
              <br/>
              </div>
              <div className="input_box">
              <span className="details">Is there a pampering session ?</span>
              <select className="pet-form-species-container" onChange={(e)=>{setPamperingSession  (stringToBoolean(e.target.value))}}>
                <option value="" disabled="disabled" selected="selected">Is there a pampering session?</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
    
              <br/>
              </div>
              <div className="input_box">
              <span className="details">Are there vet visits ?</span>
              <select  className="pet-form-species-container" onChange={(e)=>{
                setVetVisit(stringToBoolean(e.target.value))}}>
                <option value="" disabled="disabled" selected="selected">Are there vet visits?</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
    
              <br/>
              </div>
              <div className="input_box">
              <span className="details">Is there daily hairbrushing ?</span>
              <select className="pet-form-species-container" onChange={(e)=>{
                setDailyHairBrushing(stringToBoolean(e.target.value))}}>
                <option value="" disabled="disabled" selected="selected">Is there a daily hairbrushing?</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
    
              <br/>
              </div>
              <div className="input_box">
              <span className="details">Is it for cats?</span>
              <select className="pet-form-species-container" onChange={(e)=>{
                setForCat(stringToBoolean(e.target.value))}}>
                <option value="" disabled="disabled" selected="selected">Is it for cats?</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
    
              <br/>
              </div>
              <div className="input_box">
              <span className="details">Is it for dogs?</span>
              <select  className="pet-form-species-container" onChange={(e)=>{
                setForDog(stringToBoolean(e.target.value))}}>
                <option value="" disabled="disabled" selected="selected">Is it for dogs?</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
    
              <br/>
    </div>
              <input type="submit" value="Create Property" className="form_button" />
            
            </form>
        </div>
      );
  
}


