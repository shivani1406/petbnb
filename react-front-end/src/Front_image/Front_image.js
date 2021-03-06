import React, { Component } from 'react'; //optional
import axios from 'axios';

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
  }
  render (){
return(<div className="main-page">
    <div className="main-page-image">
      <h1 className="main-page-title">PetBnB</h1>
      <h3 className="main-page-description">Rent a place for your adorable pet.<br/> And have a peaceful vacation !</h3>
      
    </div>
    
  </div>
  
  );
  }
    
}


export default Profile;