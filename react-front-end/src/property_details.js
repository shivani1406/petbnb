import React, { useState, useEffect } from 'react'; 
import { useParams } from "react-router-dom";
import axios from 'axios';
const propertyDetails = () => {
  
  let { id } = useParams();
	const [property, setproperty] = useState([]);
	const baseUrl = 'http://localhost:8080';

	useEffect(() => {
		getPropertyDetails();
}, []);

const getPropertyDetails = () => {
	axios.get(`${baseUrl}/api/properties/${id}`) // You can simply make your requests to "/api/whatever you want"
	.then((response) => {
		// handle success
		console.log(response.data) // The entire response from the Rails API

		setproperty(
		response.data[0]
		);
	}) 
}

  return (
    <div style={{marginTop: '150px'}}> 
      

			<h1>{property.name}</h1>
			<h3>{property.location}</h3>
			<img src={property.image} alt = {property.name} />
				<p>{property.description}</p>
    </div>
  );
}

export default propertyDetails;