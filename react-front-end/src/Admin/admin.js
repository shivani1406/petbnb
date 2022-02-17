import React, { Component } from 'react'; //optional
import { useState , useEffect} from "react";
import axios from 'axios';
import PropertyList from '../components/property-list';
import createProperty from '../create_property';
import history from '../history';
export default function admin(){

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
    // const onSubmit = (e) => {
    //   e.preventDefault();
    //   getPropertyInfo();
    // };
    useEffect(() => {
      getPropertyInfo();
    }, []);
    const proper = properties.map((property) => {
      return (
        <PropertyList
        key = {property.id}
        name = {property.name}
        description = {property.description}
        avatar = {property.image}
        />
      );
    });
  return (
    <div className="app__admin">
      <table class="table" >
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
      
      <button type="button" class="btn btn-primary" onClick={() => history.push('/createProperty')} >Create Property</button>
    </div>
  );
}