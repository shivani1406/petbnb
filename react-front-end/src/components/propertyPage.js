import React, { Component } from 'react'; //optional
import { useState , useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

  function PropertyPage(props) {
    let {id} = useParams();
    const [query, setquery] = useState("");
    const [properties, setproperties] = useState([]);
// onSubmit(e) {
//   e.preventDefault()
//   const stringToBoolean = function(string){
//     switch(string.toLowerCase().trim()){
//         case "true": case "yes": case "1": return true;
//         case "false": case "no": case "0": case null: return false;
//         default: return Boolean(string);
//     }
// }
//   const userObject = {
//       name: this.state.name,
//       description: this.state.description,
//   location: this.state.location,
//   image: this.state.image,
//   property_type: this.state.property_type,
//   check_in_time: this.state.check_in_time,
//   check_out_time: this.state.check_out_time,
//   price_per_night: this.state.price_per_night,
//   room_size: this.state.room_size,
//   meal_plan: stringToBoolean(this.state.meal_plan),
//   pampering_session:stringToBoolean(this.state.pampering_session),
//   vet_visit:stringToBoolean(this.state.vet_visit),
//   daily_hairbrushing:stringToBoolean(this.state.daily_hairbrushing),
//   for_cat:stringToBoolean(this.state.for_cat),
//   for_dog:stringToBoolean(this.state.for_dog),
//   owner_id: 1
//   };
  const baseUrl = 'http://localhost:8080';
  const getPropertyInfo = (id) => {
  axios.get(`${baseUrl}/api/properties/${id}`) // You can simply make your requests to "/api/whatever you want"
  .then((response) => {
    // handle success
    console.log(response.data) // The entire response from the Rails API

    setproperties(
    response.data
    );
  }) 
  }
  useEffect(() => {
    getPropertyInfo(`${id}`);
  }, []);
//   this.setState({ name: "",
//   description: "",
//   location: "",
//   image: null,
//   property_type: "",
//   check_in_time: "",
//   check_out_time: "",
//   price_per_night: "",
//   room_size: "",
//   meal_plan: "",
//   pampering_session: "",
//   vet_visit: "",
//   daily_hairbrushing: "",
//   for_cat:"",
//   for_dog:"",
//   owner_id: 1 })
// }
const proper = properties.map((property) => {
 return( <div className="input_box">
  <span className="details">Property Name</span>
  <input
    type="text"
    value={property.name}
    className="pet-form-name-input"
    placeholder="Name" 
    required/>
</div>);
  
});
    
  return (
    <div className="app__createproperty">
       <h2 className="createproperty_title">Create Property</h2>
      
      <form  className="property_form">
       {proper}
          
        </form>
        {/* <button className="form_button_cancle" onClick={this.handleCancel}>Cancel</button>  */}
    </div>
  );
}



export default PropertyPage;