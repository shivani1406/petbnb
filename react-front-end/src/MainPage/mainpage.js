import React from 'react'; //optional
import { useState, useEffect } from "react";
import axios from 'axios';
import PropertyTile from '../components/property/property-tile';
import SimpleMap from '../simpleMaps';
// const locations = require("../locations.json");

export default function mainpage(){

  
    const [searchquery, setSearch] = useState("");
    const [properties, setproperties] = useState([]);
    const baseUrl = 'http://localhost:8080';
    

    useEffect(() => {
        getPropertyInfo();
    }, []);

   const getPropertyInfo = () => {
      axios.get(`${baseUrl}/api/properties`) 
      .then((response) => {
        console.log(response.data) 

        setproperties(
        response.data
        );
      }) 
    }
    const getSearchInfo = () => {
      let items = {searchquery};
      console.log(searchquery);
      console.warn("item",items);
      axios.post(`${baseUrl}/api/search`,items)
      .then((response) => {
        
        console.log(response.data)

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
        id = {property.id}
        name = {property.name}
        avatar = {property.image}
        description = {property.description}
        />
      );
    });
    return(
    <div className="search_page">
      
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
      
<div className="app_saperator">


  <div className="app__properties">
        
        {proper}
        
      </div>
     
      <div className="content_wrapper_map">
      <SimpleMap locations={[properties]} />
      </div>
      </div>
    
    </div>);
  }


