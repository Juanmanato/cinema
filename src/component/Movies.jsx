import React from 'react'
import Movie from './Movie'
import Input from './Input'
import { useState, useEffect } from 'react'
import { getAllMovie } from '../service/MovieService'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'


export default function Movies() {
  const [Movies, setMovies] = useState([])
  useEffect(() =>{
    const movies = async ()=>{
      try{
        const data = await getAllMovie()
        setMovies(data)
        console.log(data)

      }catch(e){
        console.log(e)
      }
    }
    movies()
  },[])


  return (
    <>
    <div>
      <FontAwesomeIcon icon={faStar} />
      <Input type= "radio" name = 'stars' value = '1' change = "" />
      <FontAwesomeIcon icon={faStar} />
      <Input type= "radio" name = 'stars' value = '2' change = '' />
      <FontAwesomeIcon icon={faStar} />
      <Input type= "radio" name = 'stars' value = '3' change = '' />
      <FontAwesomeIcon icon={faStar} />
      <Input type= "radio" name = 'stars' value = '4' change = '' />
      <FontAwesomeIcon icon={faStar} />
      <Input type= "radio" name = 'stars' value = '5' change = '' />
    </div>
    
     <h1 className="title1">List of Movies</h1>
     <div className="list-group-movies">
     {Movies?.map((movie, index) => <Movie key={index} {...movie} />)}
     </div>  
     </>         
    
  )
}
