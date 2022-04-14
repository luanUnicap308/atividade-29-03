import React, {useContext, useEffect, useState} from 'react';
import { ContextGetPerson } from '../../context/contextGetPerson';

const About = ()=>{
    
    const [detailsPerson, setDetailsPerson] = useState({})
    const personContext = useContext(ContextGetPerson);
    useEffect(()=>{
        setDetailsPerson({...personContext.item})
    }, [personContext])
    return(
        <div>
            <p>{detailsPerson.name}</p>
            <p>{detailsPerson.birth_year}</p>
            <p>{detailsPerson.created}</p>
            <p>{detailsPerson.edited}</p>
        </div>
    )
}

export default About