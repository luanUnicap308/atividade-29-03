import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';


export const Person = ({name, key, onClick})=>{
    return(
        <Card body bg={'dark'} text={'white'} style={{margin:'5px'}} key={key}>
            <Link onClick={onClick} to={`/about/${name}`} style={{cursor:'pointer', textDecoration:'none', color:'#FFF'}}>{name}</Link>
      </Card>
    )
}
