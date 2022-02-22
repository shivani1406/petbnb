import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import './my_bookings.css';
import { Table } from 'react-bootstrap';


const MyBookings = () => {

	const [properties, setproperties] = useState([]);
	const baseUrl = 'http://localhost:8080';
	const user_id = JSON.parse(localStorage.getItem('user_id'));
	

	const getBookedProperties = () => {
		axios.get(`${baseUrl}/api/mybookings/${user_id}`) 
		.then((response) => {
		
			console.log(response.data) 

			setproperties(
			response.data
			);
		}) 
	}
	
	useEffect(() => {
		getBookedProperties();
	}, []);

	let sno = 1;

	const propertyRow = properties.map((property) => {
		return (

			<tr>
      <td>{sno++}</td>
      <td><img className="property__img " src={property.image} alt=""/></td>
      <td>{property.name}</td>
      <td>{property.location}</td>
			<td>{property.price_per_night}</td>
    </tr>

			
		);
	});

	return (
		<div className='my-bookings-container'>
			<h3>My Bookings</h3>
			<Table bordered hover>
  <thead>
    <tr>
      <th>#</th>
			<th>Image</th>
      <th>Property Name</th>
      <th>Location</th>
      <th>Price/night</th>
    </tr>
  </thead>
  <tbody>
    {propertyRow}  
  </tbody>
</Table>
	</div>
  );
}

export default MyBookings;