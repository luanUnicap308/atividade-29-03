import React from 'react'
import { Person } from '../../components/person'
import { useParams } from "react-router-dom";

const About = ()=>{
    let params = useParams();
    console.log(params.person)
    return(
        <></>
    )
}

export default About