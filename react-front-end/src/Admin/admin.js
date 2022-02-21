import React from 'react'; //optional
import { useState , useEffect} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function admin(){
  
    const [properties, setproperties] = useState([]);
    const baseUrl = 'http://localhost:8080';

    const getPropertyInfo = () => {
      axios.get(`${baseUrl}/api/properties`) 
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
    const handleDelete = (id) => {
      axios.delete(`${baseUrl}/api/properties/${id}`) 
      .then((response) => {
        console.log(response.data)
      }) 
      }
    const proper = properties.map((property) => {
      return (
        
        <tr key={property.id}>
       <td> <img className="property__img " src={property.image} alt=""/></td>
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
      
      <button type="button" className="btn btn-primary" ><Link to={`/createProperty`} activeClassName="current">Create Property</Link></button>
      
    </div>
  );
}