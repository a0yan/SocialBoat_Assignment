import React, { useEffect, useState,useCallback, useMemo } from 'react'
import { debounce } from 'lodash';
import { useSearchParams } from 'react-router-dom'
import axios from '../../api/baseUrl'
import Card from './Card/Card';
const Results = () => {
  const [search, setSearch] = useSearchParams();
  const [results, setResults] = useState([])
  const [loading, setloading] = useState(false)
  const helper_fun = async (value) => {
    try {
        const response = await axios.get('/', {
          params: {
            q: value,
            numResults: 6,
          }
        })

       setResults(response.data.results)

   
   }
    catch (error) {
     setResults([])
    }
  }
  const debounced_search=useCallback(debounce((value)=>{helper_fun(value)
  setloading(false)},500),[])

  useEffect(() => {
    

    setloading(true)
    debounced_search(search.get('keyword'))


  },[debounced_search,search])
console.log(results);
  return (
    <div className='xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-2 md:flex md:flex-col md:items-center  p-3'>
      {loading === true ? (<div className="flex h-screen w-screen  justify-center items-center">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>) : <>
        {results!==undefined?(results.map(({ heading, tags, text, video }, index) => (
          <Card key={heading} heading={heading} tags={tags} text={text} video={video} />
        ))):null}
      </>}

    </div>
  )
}

export default Results