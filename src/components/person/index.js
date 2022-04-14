import Reactm, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { ContextGetPerson } from "../../context/contextGetPerson";

export const Person = ({name, key, onClick})=>{


    return(
        <div style={{margin:'10px'}} key={key}>
            <Link onClick={onClick} to={`/about/${name}`} style={{cursor:'pointer'}}>{name}</Link>
      </div>
    )
}
