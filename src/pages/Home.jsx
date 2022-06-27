import React from 'react'
import { useState, useEffect} from 'react'
import { getAllMovie, getInfo } from '../service/MovieService'
import Input from '../component/Input'
import Movie from '../component/Movie'
import MovieResults from '../component/MovieResults'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

export default function Home() {

const [Movies, setMovies] = useState([])
const [data, setData] =useState([])
const [search, setSearch] = useState('')

useEffect(() =>{
  const movies = async ()=>{
    try{
      const data = await getAllMovie()
      setMovies(data)

    }catch(e){
      console.log(e)
    }
  }
  movies()
},[])

useEffect(() =>{
    const movies = async () => {
      try {
        const data = await getInfo(search)
        setData(data)
        
      }catch (e) {
        console.error(e)
      }
    }
    movies()
},[search])


const searcher = (event) => {
  setSearch(event.target.value)
  console.log(event.target.value)
}

const results = !search ? data : data?.filter((result) => 
result.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div >
      <div className="search-bar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <Input className="search-bar-input inputs" type="text" id="search" placeholder="search movie..." value= {search} change = {searcher}/>
      </div>
      
      {results  && 
    <div className="list-group-movies">
    {results?.map((result, index) => <MovieResults key={index} {...result} />)}
    </div> }

    {!results && <>
     <h1 className="title1">List of Movies</h1>
     <div className="list-group-movies">
     {Movies?.map((movie, index) => { return <Movie key={index} {...movie}/>})}
     </div>
     </>} 
    </div>
  )
}
