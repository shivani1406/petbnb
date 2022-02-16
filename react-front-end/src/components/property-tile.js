import React, { useEffect } from "react";
// import "./style.css";

export default function PropertyTile({ property }) {
  return (
    property["property"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
      <div
        className="propertyTile"
        onClick={() => window.open(property["property"]["url"])}
      >
        <img className="propertyTile__img" src={property["property"]["image"]} />
        <p className="propertyTile__name" >
          {property["property"]["label"]}
        </p>
      </div>
    )
  );
}