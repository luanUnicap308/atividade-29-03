import React, { useContext, useState } from "react";
import { useQuery } from 'react-query'
import axios from 'axios'
import { Person } from "../../components/person";
import { ContextGetPerson } from "../../context/contextGetPerson";
import { ButtonCircle } from "../../components/button";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

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

  const handlePerson = (item) => {
    personContext.item = { ...item }
  }

  const backUrlBase = () => {
    setIndexPage(state => state - 1);
    setUrlBase(data.previous)
  }

  if (isLoading) return 'Carregando...';
  if (error) return 'errro'

  return (
    <div style={{ width: '100%', height: '100%', alignItems:'center', justifyContent:'center', textAlign:'center'}}>
      <h2>clique no nome para abrir as descrições</h2>
      {isFetched && (
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <div>
            {
              indexPage > 1 && (
                <ButtonCircle onclick={backUrlBase} >
                  
                  <FaChevronLeft
                    size={14}
                    color={'#FFF'}
                  />
                </ButtonCircle>
              )
            }
          </div>
          <div>
          {data.results.map((item, index) => {
            return (
              <Person
                name={item.name}
                key={index}
                // url={index}
                onClick={() => handlePerson(item)}
              />
            )
          })
          }
          </div>

          <div>
            <ButtonCircle onclick={nextUrlBase} >
              <FaChevronRight
                // focusable={{}}
                size={14}
                color={'#FFF'}
              />

            </ButtonCircle>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
