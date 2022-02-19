import React, { Component } from 'react'; //optional
import { useState , useEffect} from "react";
import axios from 'axios';
import PropertyList from '../components/property-list';
import createProperty from '../create_property';
import history from '../history';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
export default function admin(){
  let {id} = useParams();
  const [query, setquery] = useState("");
    const [properties, setproperties] = useState([]);
    const baseUrl = 'http://localhost:8080';

    const getPropertyInfo = () => {
      axios.get(`${baseUrl}/api/properties`) // You can simply make your requests to "/api/whatever you want"
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
    const handleDelete = (id) => {
      axios.delete(`${baseUrl}/api/properties/${id}`) 
      .then((response) => {
        console.log(response.data)
      }) 
      }
    const proper = properties.map((property) => {
      return (
        
        <tr key={property.id}>
       <td> <img className="property__img " src={property.image} /></td>
         <td>{property.name}
         <p>{property.description}</p></td>
        
         <td><button type="button" className="btn btn-success"><Link to={`/propertyPage/${property.id}`} activeClassName="current">Update</Link></button>
         <button type="button" className="btn btn-danger" onClick={event => handleDelete(`${property.id}`)}>Delete</button>
         </td>
       </tr>
        
      );
    });
  return (
    <div className="app__admin">
      <table className="table" >
      <thead>
        <tr>
        <th>Image</th>
        <th>Name/ Details</th>
        <th>Update/ Delete</th>
        </tr>
        </thead>
        <tbody>
        {proper}
        </tbody>
      </table>
      
      <button type="button" className="btn btn-primary" onClick={() => history.push('/createProperty')} >Create Property</button>
    </div>
  );
}