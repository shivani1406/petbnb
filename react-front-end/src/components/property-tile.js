import React from "react";
import { useNavigate } from "react-router-dom";


export default function PropertyTile(props) {
  const navigate = useNavigate();
  return (
   
<div className="propertyTile"
        onClick={() => navigate(`/propertyDetails/${props.id}`)}
      >

        <img className="propertyTile__img" src={props.avatar} alt=""/>
        <h3 className="propertyTile__name" >
          {props.name}
        </h3>
        <p>{props.description}</p>
      </div>
   
      
    
  );
}