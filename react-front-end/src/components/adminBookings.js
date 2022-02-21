import React, { Component } from 'react'; //optional
import { useState , useEffect} from "react";
import axios from 'axios';
import PropertyList from '../components/property-list';
import createProperty from '../create_property';
import history from '../history';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
export default function adminBookings(){
    let {id} = useParams();
    const [query, setquery] = useState("");
      const [properties, setproperties] = useState([]);
      const baseUrl = 'http://localhost:8080';
      const getPropertyInfo = () => {
        
        axios.get(`${baseUrl}/api/reservations/${localStorage.getItem('user_id')}`) 
        // You can simply make your requests to "/api/whatever you want"
        .then((response) => {
          // handle success
          console.log(response.data) // The entire response from the Rails API
  
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
         <td> <img className="property__img " src={property.image} /></td>
           <td>{property.property_name}
           <p>{property.description}</p></td>
          
           <td>
             {property.user_name}
           </td>
         </tr>
          
        );
      });
  return(
    <div className="app__createproperty">
<table className="table" >
      <thead>
        <tr>
        <th>Image</th>
        <th>Property Name/ Details</th>
        <th>Guest Name</th>
        </tr>
        </thead>
        <tbody>
        {proper}
        </tbody>
      </table>
      
    </div>
  );
}