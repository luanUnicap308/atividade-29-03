import { Link } from "react-router-dom";

export const Person = ({name, key, onClick})=>{
    return(
        <div style={{margin:'10px'}} key={key}>
            <Link onClick={onClick} to={`/about/${name}`} style={{cursor:'pointer'}}>{name}</Link>
      </div>
    )
}
