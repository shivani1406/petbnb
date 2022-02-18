import React, { useEffect } from "react";
// import "./style.css";

export default function PropertyList(props) {
  return (
   

       <tr>
       <td> <img className="property__img " src={props.avatar} /></td>
         <td>{props.name}
         <p>{props.description}</p></td>
        
         <td><button type="button" className="btn btn-success">Update</button>
         <button type="button" className="btn btn-danger">Delete</button>
         </td>
       </tr>
    
      
    
  );
}