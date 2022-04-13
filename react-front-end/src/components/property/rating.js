import React from "react";
import { useNavigate } from "react-router-dom";


export default function rating(props) {
  const navigate = useNavigate();
  return (
   
<div className="propertyTile" >

        <img className="propertyTile__img" src={props.avatar_url} alt=""/>
        <h3 className="propertyTile__name" >
          {props.name}
        </h3>
      </div>
   
      
    
  );
}