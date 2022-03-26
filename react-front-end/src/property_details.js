import React, { useState, useEffect } from 'react'; 
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import './property_details.css';
import { Button, Modal } from 'react-bootstrap';

const PropertyDetails = () => {
  
  let { id } = useParams();
	const [property, setproperty] = useState([]);
	const [images, setimages] = useState([]);
	const [avgrating, setavgrating] = useState([]);
	const [ratings, setratings] = useState([]);

	const baseUrl = 'http://localhost:8080';

const navigate = useNavigate();
	useEffect(() => {
		getPropertyDetails();
		getImages();
		getavgRating();
		getRating();
}, []);

const getPropertyDetails = () => {
	axios.get(`${baseUrl}/api/properties/${id}` ) 
	.then((response) => {
	
		console.log(response.data) 

		setproperty(
		response.data[0]
		);
	}) 
}



const getRating = () => {
	axios.get(`${baseUrl}/api/ratings/${id}` ) 
	.then((response) => {
	
		console.log(response.data) 

		setratings(
		response.data
		);
	}) 
}
const ratingDetails = ratings.map((rating) => {
	return (
		<div>
		<img className="user_img" src={rating.avatar_url} /> 
		{rating.name}
		<p>
			{rating.remark}
		</p>
				</div>
	);
});

const getavgRating = () => {
	axios.get(`${baseUrl}/api/avg_ratings/${id}` ) 
	.then((response) => {
	
		console.log(response.data) 

		setavgrating(
		response.data[0]
		);
	}) 
}

const getImages = () => {
	axios.get(`${baseUrl}/api/images/${id}` )
	.then((response) => {
		
		console.log(response.data) 

		setimages(
		response.data
		);
	}) 
}

const imagegrid = images.map((image) => {
	return (
		<div>
		 <img src={image.image_url} alt="" className="grid_image"/> 
		</div>
	);
});

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
		<div className='property__details'>
    <div className='property-details-container'> 
      
			<h1>{property.name}</h1>
			<h3>{property.location}</h3>
			<div class="row">
  <div class="column">
			<img className='property-details-img' src={property.image} alt = {property.name} />
			</div>
			<div class="column">
			{imagegrid}
			</div>
			</div>
		
				<p className='property-description-p'>{property.description}</p>
				<p><i className="fab fa-gratipay fa-lg"></i>
						Room Size {property.room_size} sqft
						</p>
						<p><i className="fab fa-gratipay fa-lg"></i>
						Price per Night ${property.price_per_night} 
						</p>
				{property.meal_plan &&  <p><i className="fab fa-gratipay fa-lg"></i>
						Meal Plan
						</p>}
						{property.pampering_session &&  <p><i className="fab fa-gratipay fa-lg"></i>
						Pampering Session
						</p>}
						{property.vet_visit &&  <p><i className="fab fa-gratipay fa-lg"></i>
						Vet Visits
						</p>}
						{property.daily_hairbrushing &&  <p><i className="fab fa-gratipay fa-lg"></i>
						Daily Hairbrushing
						</p>}
						{property.for_dog &&  <p><i className="fab fa-gratipay fa-lg"></i>
						For Dogs
						</p>}
						{property.for_cats &&  <p><i className="fab fa-gratipay fa-lg"></i>
						For Cats
						</p>}
					
			
	  </div>
		</div>
		<i className="fab fa-angellist fa-lg">{avgrating.avg}</i>
		&nbsp;&nbsp; : {avgrating.count} reviews
	<div className="user_review">
{ratingDetails}
</div>	
<div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>

		<Button className='btn btn-success' variant="primary" onClick={handleShowConfirmation}>
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