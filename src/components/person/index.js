import React from "react";
import { Link } from "react-router-dom";

export const Person = ({name, url, key, person})=>{
    return(
        <div style={{margin:'10px'}} key={key}>
            <Link {...person} to={`/about/${name}`} style={{cursor:'pointer'}}>{person.name}</Link>
      </div>
    )
}
