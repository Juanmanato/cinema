import React from 'react'
import { useState, useEffect} from 'react'
import { getAllMovie, getInfo } from '../service/MovieService'
import Input from '../component/Input'
import Movie from '../component/Movie'
import MovieResults from '../component/MovieResults'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import {faStar} from '@fortawesome/free-solid-svg-icons'

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

//------------------------------------------
const [ranked, setRanked] = useState()
const rank = (event) =>{
  setRanked(event.target.value)
}
const ranking = Movies.filter(vote => {
  if (ranked <= 2){
    return vote.vote_average <= 2
  }
  else if (ranked === 4){
    return vote.vote_average <= 4
  }
  else if (ranked <= 6){
    return vote.vote_average <= 6 
  }
  else if (ranked <=8){
    return  vote.vote_average <= 8
  }
  else {
    return vote.vote_average  <= 10
  }
} )
console.log(ranking)

// const ranking = Movies.filter(vote => vote.vote_average < ranked )
// console.log(ranking)

//----------------------------------------------

  return (
    <div >
  
      <div className="search-bar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <Input className="search-bar-input inputs" type="text" id="search" placeholder="search movie..." value= {search} change = {searcher}/>
      </div>

      {results  && 
    <div className="list-group-movies">
    {results?.map((result, index) => <MovieResults key={index} {...result} />)}
    </div>
          }

    {!results && <>

      <div >
      <FontAwesomeIcon icon={faStar} />
      <Input type= "radio" name = 'stars' value = {2} change = {rank} />
      <FontAwesomeIcon icon={faStar} />
      <Input type= "radio" name = 'stars' value = {4} change = {rank} />
      <FontAwesomeIcon icon={faStar} />
      <Input type= "radio" name = 'stars' value = {6} change = {rank} />
      <FontAwesomeIcon icon={faStar} />
      <Input type= "radio" name = 'stars' value = {8} change = {rank} />
      <FontAwesomeIcon icon={faStar} />
      <Input type= "radio" name = 'stars' value = {10} change = {rank} />
    </div>
     <h1 className="title1">List of Movies</h1>
     <div className="list-group-movies">

      {/* funcion para mostrar todas las peliculas y a la ves filtrar por en este caso vote_avarage (ranked) con un if ternario {...movie.vote_average < ranked ? movie.vote_average <= ranked : false} */}

     {Movies?.map((movie, index) => { return <Movie key={index} {...movie}  />})}
     </div>

     </>} 
    </div>
  )
}

//hacer botones de radio de el filtro en un componente

// condicional de spiner para cuando carga

