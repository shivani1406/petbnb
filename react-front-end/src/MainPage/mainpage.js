import React, { Component } from 'react'; //optional
import { useState, useEffect } from "react";
import axios from 'axios';
import PropertyTile from '../components/property-tile';

export default function mainpage(){

  
    const [searchquery, setSearch] = useState("");
    const [properties, setproperties] = useState([]);
    const baseUrl = 'http://localhost:8080';
    // const getPropertyInfo = async () => {
    //   var result = await axios.get('/api/properties');
    //   setproperties(result.data.hits);
    //   console.log(result.data.hits);
    // };
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
    const getSearchInfo = () => {
      let items = {searchquery};
      console.log(searchquery);
      console.warn("item",items);
      axios.get(`${baseUrl}/api/search`,items)
       // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        
        console.log(response.data) // The entire response from the Rails API

        setproperties(
        response.data
        );
      }) 
    }
    const onSubmit = (e) => {
      e.preventDefault();
      getSearchInfo();
    };
    useEffect(() => {
      getPropertyInfo();
    }, []);

    const proper = properties.map((property) => {
      return (
        <PropertyTile
        key = {property.id}
        name = {property.name}
        avatar = {property.image}
        description = {property.description}
        />
      );
    });
    return(
    <div className="search_page">
      {/* <p>main page</p> */}
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="enter location"
          autoComplete="Off"
          value={searchquery}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
      </form>

      <div className="app__properties">
        
        {proper}
        
      </div>
    </div>);
  }


