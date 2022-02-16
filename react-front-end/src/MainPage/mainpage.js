import React, { Component } from 'react'; //optional
import { useState } from "react";
import axios from 'axios';
import PropertyTile from '../components/property-tile';

export default function mainpage(){

  
    const [query, setquery] = useState("");
    const [properties, setproperties] = useState([]);

    const getPropertyInfo = async () => {
      var result = await axios.get('/api/properties');
      setproperties(result.data.hits);
      console.log(result.data.hits);
    };

    const onSubmit = (e) => {
      e.preventDefault();
      getPropertyInfo();
    };
    return(
    <div>
      {/* <p>main page</p> */}
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="enter location"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
      </form>

      <div className="app__properties">
        {properties !== [] &&
          properties.map((property) => {
            return <PropertyTile property={property} />;
          })}
      </div>
    </div>);
  }


