import React, {  useState } from "react";
import { useQuery } from 'react-query'
import axios from 'axios'

const App = () => {

  const [urlBase, setUrlBase] = useState('https://swapi.dev/api/people/?page=1')
  const [indexPage, setIndexPage] = useState(1)
  const [arrayData, setArrayData] = useState();
  const [listIndexObjectOpen, setListIndexObjectOpen] = useState([]);
  const { isLoading, error, isFetched } = useQuery(`page${indexPage}`, () =>
    axios.get(urlBase)
      .then(res => setArrayData(res.data))
  )

  const removeItemList = (index) => {
    const newListItemRemoved = listIndexObjectOpen.filter(item => item !== index)
    setListIndexObjectOpen(newListItemRemoved)
  }

  const removeAll = () => {
    setListIndexObjectOpen([])
  }

  const addItemList = (index) => {
    setListIndexObjectOpen([...listIndexObjectOpen, index])
  }

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

  return (
    <div style={{ width: '100%', height: '100%', background: 'red' }}>
      {isFetched && (
        <div>
          <h2>clique no nome para abrir as descrições</h2>
          {arrayData.results.map((i, index) => {
            return (
              <div>
                <p onClick={() => handleObjectDisplayOpen(index)} style={{cursor:'pointer'}}>{i.name}</p>
                {
                  listIndexObjectOpen.length > 0 && (
                    listIndexObjectOpen.map(item => {
                      return (
                        item === index && (
                          <div style={{ background: 'green' }}>
                            <p>{i.gender}</p>
                            <p>{i.birth_year}</p>
                            <p>{i.height / 100}</p>
                          </div>
                        )
                      )
                    })
                  )
                }
              </div>
            )
          })
          }
        </div>
      )}

      <input type='text' />
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

export default App;
