import React, { useContext, useState } from "react";
import { useQuery } from 'react-query'
import axios from 'axios'
import { Person } from "../../components/person";
import { ContextGetPerson } from "../../context/contextGetPerson";

const Home = () => {

  const [urlBase, setUrlBase] = useState('https://swapi.dev/api/people/?page=1')
  const [indexPage, setIndexPage] = useState(1)
  const { isLoading, error, data, isFetched } = useQuery(`page${indexPage}`, () =>
    axios.get(urlBase)
      .then(res => {
        return res.data;
      })
  )

  const personContext = useContext(ContextGetPerson);
  
  const nextUrlBase = () => {
    setIndexPage(state => state + 1);
    setUrlBase(data.next)
  }

  const handlePerson = (item)=>{
    personContext.item =  {...item}
  }

  const backUrlBase = () => {
    setIndexPage(state => state - 1);
    setUrlBase(data.previous)
  }

  if (isLoading) return 'Carregando...';
  if (error) return 'errro'

  return (
    <div style={{ width: '100%', height: '100%', background: 'red' }}>
      {isFetched && (
        <div>
          <h2>clique no nome para abrir as descrições</h2>
          {data.results.map((item, index) => {
            return (
              <Person
                name={item.name}
                key={index}
                // url={index}
                onClick={()=> handlePerson(item)}
              />
            )
          })
          }
        </div>
      )}
      <div>
        {
          indexPage > 1 && (
            <button onClick={backUrlBase} >Back</button>
          )
        }
        <button onClick={nextUrlBase}>Next</button>
      </div>
    </div>
  );
}

export default Home;
