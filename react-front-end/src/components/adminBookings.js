import React from 'react'; //optional
import { useState , useEffect} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function adminBookings(){
   
      const [properties, setproperties] = useState([]);
      const baseUrl = 'http://localhost:8080';
      const getPropertyInfo = () => {
        
        axios.get(`${baseUrl}/api/reservations/${localStorage.getItem('user_id')}`) 
        .then((response) => {
          console.log(response.data) 
  
          setproperties(
          response.data
          );
        }) 
      }
      
      useEffect(() => {
        getPropertyInfo();
      }, []);

      const proper = properties.map((property) => {
        return (
          
          <tr key={property.property_id}>
         <td> <img className="property__img " src={property.image} alt=""/></td>
           <td>{property.property_name}
           <p>{property.description}</p></td>
          
           <td>
             {property.user_name}
           </td>
           <td>
			<Link to={`/Messages/${property.property_id}`} >Chat Message</Link>
			</td>
         </tr>
          
        );
      });
  return(
    <div className="app__createproperty">
      <h3>Booked Properties</h3>
<table className="table" >
  
      <thead>
        <tr>
        <th>Image</th>
        <th>Property Name/ Details</th>
        <th>Guest Name</th>
        <td>Chat Messages</td>
        </tr>
        </thead>
        <tbody>
        {proper}
        </tbody>
      </table>
      
    </div>
  );
}