import React, { useEffect } from "react";
// import "./style.css";

export default function PropertyList(props) {
  return (
   

       <tr>
       <td> <img className="propertyTile__img" src={props.avatar} /></td>
         <td>{props.name}
         <p>{props.description}</p></td>
        
         <td><button type="button" class="btn btn-success">Update</button>
         <button type="button" class="btn btn-danger">Delete</button>
         </td>
       </tr>
    
      
    
  );
}