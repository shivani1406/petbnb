import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "./style.css";

export default function PropertyTile(props) {
  const navigate = useNavigate();
  return (
   
<div className="propertyTile"
        onClick={() => navigate(`/propertyDetails/${props.id}`)}
      >

        <img className="propertyTile__img" src={props.avatar} />
        <h3 className="propertyTile__name" >
          {props.name}
        </h3>
        <p>{props.description}</p>
      </div>
   
      
    
  );
}