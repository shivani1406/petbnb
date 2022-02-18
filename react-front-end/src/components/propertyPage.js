import React, { Component } from 'react'; //optional
import { useState , useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

  function PropertyPage(props) {
    let {id} = useParams();
    const [query, setquery] = useState("");
    const [properties, setproperties] = useState([]);

   const inputChangedHandler = (event) => {
      const updatedName = event.target.value;
      // May be call for search result
  }
  
  const baseUrl = 'http://localhost:8080';
  const getPropertyInfo = (id) => {
  axios.get(`${baseUrl}/api/properties/${id}`) 
  .then((response) => {
    console.log(response.data)
    setproperties(
    response.data
    );
  }) 
  }
 
  useEffect(() => {
    getPropertyInfo(`${id}`);
  }, []);
const userObject = {
  name: properties.name
  };
  const handleUpdate = (id) => {
    axios.put(`${baseUrl}/api/properties/${id}`,userObject) 
  .then((response) => {
    console.log(response.data) 

    setproperties(
    response.data
    );
  }) 
  }

const proper = properties.map((property) => {
 return( <div className="input_box">
  <span className="details">Property Name</span>
  <input
  id="name"
    type="text"
    value={property.name}
    className="pet-form-name-input"
    placeholder="Name" 
    onChange={(event)=>inputChangedHandler(event)}
    required/>
</div>);
  
});
const handleDelete = (id) => {
  axios.delete(`${baseUrl}/api/properties/${id}`) 
  .then((response) => {
    console.log(response.data)
  }) 
  }
  return (
    <div className="app__createproperty">
       <h2 className="createproperty_title">Create Property</h2>
      
      <form  className="property_form">
       {proper}
          
        </form>
        <button className="form_button_cancle" onClick={event => handleUpdate(`${id}`)}>Update</button> 
        <button onClick={event => handleDelete(`${id}`)}>Delete</button>
    </div>
  );
}



export default PropertyPage;