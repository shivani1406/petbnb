import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import './my_bookings.css';
import { Table, Modal, Button } from 'react-bootstrap';


const MyBookings = () => {

	const [properties, setproperties] = useState([]);
	const baseUrl = 'http://localhost:8080';
	const user_id = JSON.parse(localStorage.getItem('user_id'));
	

	const getBookedProperties = () => {
		axios.get(`${baseUrl}/api/mybookings/${user_id}`) 
		.then((response) => {
		
			//console.log(response.data) 

			setproperties(
			response.data
			);
		}) 
	}


	const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCloseConfirmation = () => {
		setShowConfirmation(false);
	}
  const handleCancelBooking = (property_id) => {
		

		axios.delete(`${baseUrl}/api/mybookings/delete/${property_id}/${user_id}`) 
      .then((response) => {
        setShowConfirmation(true);
				getBookedProperties();
      }) 
        

		
	}
	
	useEffect(() => {
		getBookedProperties();
	}, []);

	let sno = 1;

	const propertyRow = properties.map((property) => {
		return (

			<tr key={property.property_id}>
      <td>{sno++}</td>
      <td><img className="property__img " src={property.image} alt=""/></td>
      <td>{property.name}</td>
      <td>{property.location}</td>
			<td>${property.price_per_night}</td>
			<td><Button className='btn btn-danger' variant="danger" onClick={ () => handleCancelBooking(property.property_id) }>
        Cancel
      </Button></td>
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
			<th>Cancel Booking</th>
    </tr>
  </thead>
  <tbody>
    {propertyRow}  
  </tbody>
</Table>
<Modal show={showConfirmation} onHide={handleCloseConfirmation}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>This booking has now been cancelled succesfully. Please close this message box.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmation}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
	</div>
  );
}

export default MyBookings;