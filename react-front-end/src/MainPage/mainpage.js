import React from 'react'; //optional
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import PropertyTile from '../components/property/property-tile';
import SimpleMap from '../simpleMaps';
// const locations = require("../locations.json");

export default function mainpage(){

  const [startDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date());
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
      <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
        <input
          className="form-control search-slt"
          type="text"
          placeholder="enter location"
          autoComplete="Off"
          value={searchquery}
          onChange={(e) => setSearch(e.target.value)}
        />
         </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
         <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} 
         />
         </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                        <DatePicker selected={EndDate} onChange={(date) => setEndDate(date)} 
         />
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 p-0">
        <input className="app__submit" type="submit" value="Search" />
        </div>
                    </div>
                </div>
            </div>
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


