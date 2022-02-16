import React, { Component } from 'react'; //optional
import { useState , useEffect} from "react";
import axios from 'axios';


// export default function createProperty(){
  class createProperty extends Component {
    constructor(props) {
      super(props)

      this.onChangeUserName = this.onChangeUserName.bind(this);
      this.onChangeDescription = this.onChangeDescription.bind(this);
      this.onChangeLocation = this.onChangeLocation.bind(this);
      this.onChangeImage = this.onChangeImage.bind(this);
      this.onChangePropertyType = this.onChangePropertyType.bind(this);
      this.onChangeCheckintime = this.onChangeCheckintime.bind(this);
      this.onChangeCheckouttime = this.onChangeCheckouttime.bind(this);
      this.onChangePricepernight = this.onChangePricepernight.bind(this);
      this.onChangeRoomsize = this.onChangeRoomsize.bind(this);
      this.onChangeMealplan = this.onChangeMealplan.bind(this);
      this.onChangePamperingsession = this.onChangePamperingsession.bind(this);
      this.onChangeVetvisit = this.onChangeVetvisit.bind(this);
      this.onChangeDailyhairbrushing = this.onChangeDailyhairbrushing.bind(this);
      this.onChangeforcats = this.onChangeforcats.bind(this);
      this.onChangefordogs = this.onChangefordogs.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
     
      this.state = {
        name: "",
        description: "",
        location: "",
        image: null,
        property_type: "",
        check_in_time: "",
        check_out_time: "",
        price_per_night: "",
        room_size: "",
        meal_plan: undefined,
        pampering_session: undefined,
        vet_visit: undefined,
        daily_hairbrushing: undefined,
        for_cat:undefined,
        for_dog:undefined,
        owner_id: 1
      }
  }
  onChangeUserName(e) {
    this.setState({ name: e.target.value })
}
onChangeDescription(e) {
  this.setState({ description: e.target.value })
}
onChangeLocation(e) {
  this.setState({ location: e.target.value })
}
onChangeImage(e) {
  this.setState({ image: e.target.value })
}
onChangePropertyType(e) {
  this.setState({ property_type: e.target.value })
}
onChangeCheckintime(e) {
  this.setState({ check_in_time: e.target.value })
}
onChangeCheckouttime(e) {
  this.setState({ check_out_time: e.target.value })
}
onChangePricepernight(e) {
  this.setState({ price_per_night: e.target.value })
}
onChangeRoomsize(e) {
  this.setState({ room_size: e.target.value })
}
onChangeMealplan(e) {
  this.setState({ meal_plan: e.target.value })
}
onChangePamperingsession(e) {
  this.setState({ pampering_session: e.target.value })
}
onChangeVetvisit(e) {
  this.setState({ vet_visit: e.target.value })
}
onChangeDailyhairbrushing(e) {
  this.setState({ daily_hairbrushing: e.target.value })
}
onChangeforcats(e) {
  this.setState({ for_cat: e.target.value })
}
onChangefordogs(e) {
  this.setState({ for_dog: e.target.value })
}

onSubmit(e) {
  e.preventDefault()
  const stringToBoolean = function(string){
    switch(string.toLowerCase().trim()){
        case "true": case "yes": case "1": return true;
        case "false": case "no": case "0": case null: return false;
        default: return Boolean(string);
    }
}
  const userObject = {
      name: this.state.name,
      description: this.state.description,
  location: this.state.location,
  image: this.state.image,
  property_type: this.state.property_type,
  check_in_time: this.state.check_in_time,
  check_out_time: this.state.check_out_time,
  price_per_night: this.state.price_per_night,
  room_size: this.state.room_size,
  meal_plan: stringToBoolean(this.state.meal_plan),
  pampering_session:stringToBoolean(this.state.pampering_session),
  vet_visit:stringToBoolean(this.state.vet_visit),
  daily_hairbrushing:stringToBoolean(this.state.daily_hairbrushing),
  for_cat:stringToBoolean(this.state.for_cat),
  for_dog:stringToBoolean(this.state.for_dog),
  owner_id: 1
  };
  const baseUrl = 'http://localhost:8080';
  axios.post(`${baseUrl}/api/properties`, userObject)
      .then((res) => {
          console.log(res.data)
      }).catch((error) => {
          console.log(error)
      });

  this.setState({ name: "",
  description: "",
  location: "",
  image: null,
  property_type: "",
  check_in_time: "",
  check_out_time: "",
  price_per_night: "",
  room_size: "",
  meal_plan: "",
  pampering_session: "",
  vet_visit: "",
  daily_hairbrushing: "",
  for_cat:"",
  for_dog:"",
  owner_id: 1 })
}
    render (){
  return (
    <div className="app__createproperty">
      <h2>Create Property</h2>
      <form  onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.name} onChange={this.onChangeUserName}
            className="pet-form-name-input"
            placeholder="Name"/>

          <br/>

          <input
            type="text"
            value={this.state.description}
            onChange={this.onChangeDescription}
            className="pet-form-name-input"
            placeholder="Description"/>

          <br/>

          <input
            type="text"
            value={this.state.location}
            onChange={this.onChangeLocation}
            className="pet-form-name-input"
            placeholder="Location"/>

          <br/>

         
            <input type="text" onChange={this.onChangeImage} className="pet-form-img" placeholder="Enter file url"/>
            <img src={this.state.image} className="propertyTile__img" />
          

          <br/>
          <input
            type="text"
            value={this.state.property_type}
            onChange={this.onChangePropertyType}
            className="pet-form-name-input"
            placeholder="Property Type"/>

          <br/>
          <input
            type="text"
            value={this.state.check_in_time}
            onChange={this.onChangeCheckintime}
            className="pet-form-name-input"
            placeholder="Check-in time"/>

          <br/>
          <input
            type="text"
            value={this.state.check_out_time}
            onChange={this.onChangeCheckouttime}
            className="pet-form-name-input"
            placeholder="Check-out time"/>

          <br/>

          <input
            type="text"
            value={this.state.price_per_night}
            onChange={this.onChangePricepernight}
            className="pet-form-name-input"
            placeholder="Price per night"/>

          <br/>
          <input
            type="text"
            value={this.state.room_size}
            onChange={this.onChangeRoomsize}
            className="pet-form-name-input"
            placeholder="Room size"/>

          <br/>

          <select  className="pet-form-species-container" onChange={this.onChangeMealplan}>
            <option value="" disabled="disabled" selected="selected">Is there a meal plan?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <br/>
          <select className="pet-form-species-container" onChange={this.onChangePamperingsession}>
            <option value="" disabled="disabled" selected="selected">Is there a pampering session?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <br/>
          <select  className="pet-form-species-container" onChange={this.onChangeVetvisit}>
            <option value="" disabled="disabled" selected="selected">Are there a vet visits?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <br/>
          <select className="pet-form-species-container" onChange={this.onChangeDailyhairbrushing}>
            <option value="" disabled="disabled" selected="selected">Is there a daily hairbrushing?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <br/>
          <select className="pet-form-species-container" onChange={this.onChangeforcats}>
            <option value="" disabled="disabled" selected="selected">Is it for cats?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <br/>
          <select  className="pet-form-species-container" onChange={this.onChangefordogs}>
            <option value="" disabled="disabled" selected="selected">Is it for dogs?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>

          <br/>

          <input type="submit" value="Create Property" className="btn btn-success " />
        </form>
        <button className="pet-form-cancel" onClick={this.handleCancel}>Cancel</button>
    </div>
  );
}
}


export default createProperty;