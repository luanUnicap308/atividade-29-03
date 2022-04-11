import React, { useEffect, useState } from "react";
import { useQuery } from 'react-query'
import axios from 'axios'
import { Person } from "../../components/person";

const Home = () => {

  const [urlBase, setUrlBase] = useState('https://swapi.dev/api/people/?page=1')
  const [indexPage, setIndexPage] = useState(1)
  const [arrayData, setArrayData] = useState();
  const [listIndexObjectOpen, setListIndexObjectOpen] = useState([]);
  const { isLoading, error, data, isFetched } = useQuery(`page${indexPage}`, () =>
    axios.get(urlBase)
      .then(res => {
        setArrayData(res.data);
        return res.data;
      })
  )

  const removeItemList = (index) => {
    const newListItemRemoved = listIndexObjectOpen.filter(item => item != index)
    setListIndexObjectOpen(newListItemRemoved)
  }

  const removeAll = () => {
    setListIndexObjectOpen([])
  }

  const addItemList = (index) => {
    setListIndexObjectOpen([...listIndexObjectOpen, index])
  }

  useEffect(() => {
    console.log(arrayData)
  }, [isFetched])

  const handleObjectDisplayOpen = (index) => {
    const isInclude = listIndexObjectOpen.includes(index)
    isInclude ? removeItemList(index) : addItemList(index)
  }

  const nextUrlBase = () => {
    setIndexPage(state => state + 1);
    setUrlBase(arrayData.next)
    removeAll()
  }

  const backUrlBase = () => {
    setIndexPage(state => state - 1);
    setUrlBase(arrayData.previous)
    removeAll()
  }

  if (isLoading) return 'Carregando...';
  if (error) return 'errro'

  console.log('data', data);
  return (
    <div style={{ width: '100%', height: '100%', background: 'red' }}>
      {isFetched && (
        <div>
          <h2>clique no nome para abrir as descrições</h2>
          {data.results.map((item, index) => {
            return (

              <Person
                name={item.name}
                url={index}
                person={data.results[index]}
              />
              // <div key={index}>
              //   <p onClick={() => handleObjectDisplayOpen(index)} style={{cursor:'pointer'}}>{i.name}</p>
              //   {
              //     listIndexObjectOpen.length > 0 && (
              //       listIndexObjectOpen.map(item => {
              //         return (
              //           item == index && (
              //             <div key={index} style={{ background: 'green' }}>
              //               <p>{i.gender}</p>
              //               <p>{i.birth_year}</p>
              //               <p>{i.height / 100}</p>
              //             </div>
              //           )
              //         )
              //       })
              //     )
              //   }
              // </div>
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
