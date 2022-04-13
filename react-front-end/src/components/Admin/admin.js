import React from 'react'; //optional
import { useState , useEffect} from "react";
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import { useAlert } from 'react-alert';

export default function admin(){
  const navigate = useNavigate();
  const alert = useAlert()
    const [properties, setproperties] = useState([]);
    const baseUrl = 'http://localhost:8080';
    const getPropertyInfo = () => {
      axios.get(`${baseUrl}/api/properties1/${localStorage.getItem('user_id')}`) 
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
        alert.show('Property Deleted Successfully!')
        window.location.reload(false);
        console.log(response.data)
      }) 
      }
    const proper = properties.map((property) => {
      return (
        
        <tr key={property.id}>
       <td> <img className="property__img " src={property.image} alt=""/></td>
         <td>{property.name}
         <p>{property.description}</p></td>
        
         <td><button type="button" className="btn btn-success" onClick={event => navigate(`/propertyPage/${property.id}`)}>Update</button>
         <button type="button" className="btn btn-danger" onClick={event => handleDelete(`${property.id}`)}>Delete</button>
         </td>
       </tr>
        
      );
    });
  return (
    <div className="app__admin">
      <h3>My Properties</h3>
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
      
      <button type="button" className="btn btn-success" onClick={event => navigate('/createProperty')}>Create Property</button>
      
    </div>
  );
}