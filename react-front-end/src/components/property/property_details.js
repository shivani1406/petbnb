import React, { useState, useEffect } from 'react'; 
import { useParams, useNavigate } from "react-router-dom";
import { useAlert } from 'react-alert';
import axios from 'axios';
import './property_details.css';
import { Button, Modal } from 'react-bootstrap';
import ReactStars from 'react-stars'

const PropertyDetails = () => {

	const ratingChanged = (newRating) => {
		console.log(newRating);
		setstars(newRating);
	}
	const alert = useAlert();
  let { id } = useParams();
	const [property, setproperty] = useState([]);
	const [images, setimages] = useState([]);
	const [avgrating, setavgrating] = useState([]);
	const [ratings, setratings] = useState([]);
	const [stars, setstars] = useState([]);
	const [ratingtitle, setratingtitle] = useState([]);
	const [ratingreview, setratingreview] = useState([]);

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

const submitRating = () => {
	const owner_id = localStorage.getItem('user_id');
	const userObject = {owner_id, stars, ratingtitle, ratingreview};
	const baseUrl = 'http://localhost:8080';
      axios.post(`${baseUrl}/api/ratings/${id}`, userObject)
          .then((res) => {
            alert.show('Review Added Successfully!')
						setratingreview("");
						setratingtitle("");
						setstars("");
       navigate(`/propertyDetails/${id}`);
          }).catch((error) => {
              console.log(error)
          });
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
		<img className="user_img" src={rating.avatar_url} alt="" /> 
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

<div className="auth-wrapper">
                <div className="auth-inner">
								<ReactStars
  count={5}
  onChange={ratingChanged}
  size={24}
  color2={'#ffd700'} 
	value={stars}
	/>
								<div className="form-floating">
  <input type="text" className="form-control" placeholder="Leave a comment here" id="floatingTexttitle" value={ratingtitle} onChange={(e)=>{setratingtitle(e.target.value)}}/>
  <label for="floatingTexttitle">Add a headline</label>
</div>
<div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"
	value={ratingreview} onChange={(e)=>{setratingreview(e.target.value)}}></textarea>
  <label for="floatingTextarea">Review</label>
</div>
<Button className='btn btn-success' variant="primary" onClick={submitRating}>
        Submit
      </Button>
</div></div>

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