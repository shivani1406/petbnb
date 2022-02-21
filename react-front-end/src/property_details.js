import React, { useState, useEffect } from 'react'; 
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import './property_details.css';
import { Button, Modal } from 'react-bootstrap';
const PropertyDetails = () => {
  
  let { id } = useParams();
	const [property, setproperty] = useState([]);
	const baseUrl = 'http://localhost:8080';

const navigate = useNavigate();
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

const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCloseConfirmation = () => {
		setShowConfirmation(false);
		navigate(`/myBookings`);
	}
  const handleShowConfirmation = () => {
		const user_id = JSON.parse(localStorage.getItem('user_id'));

		axios.post('/api/properties/book',  { id, user_id });
        

		setShowConfirmation(true);
	}

  return (
		<div>
    <div className='property-details-container'> 
      

			<h1>{property.name}</h1>
			<h3>{property.location}</h3>
			<img className='property-details-img' src={property.image} alt = {property.name} />
				<p className='property-description-p'>{property.description}</p>
				
			
	  </div>

	


		<Button className='book-property-btn' variant="primary" onClick={handleShowConfirmation}>
        Book Property
      </Button>

      <Modal show={showConfirmation} onHide={handleCloseConfirmation}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>This property has now been booked succesfully. Please check My Bookings page to make changes.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseConfirmation}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>


</div>
  );
}

export default PropertyDetails;