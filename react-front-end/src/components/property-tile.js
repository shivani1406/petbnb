import React, { useEffect } from "react";
// import "./style.css";

export default function PropertyTile(props) {
  return (
   
<div className="propertyTile"
        onClick={() => window.open(props["property"]["url"])}
      >
       
        <img className="propertyTile__img" src={props.avatar} />
        <h3 className="propertyTile__name" >
          {props.name}
        </h3>
        <p>{props.description}</p>
      </div>
   
      
    
  );
}