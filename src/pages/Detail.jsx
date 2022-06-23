import React from 'react'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getMovieById } from '../service/MovieService'

export default function Detail() {

  const {id} = useParams()
  const [movieId, setMovieId] = useState({})
  const [lenguages, setLenguages] = useState([])
  const [genres, setGenres] = useState([])
  const URL = 'https://image.tmdb.org/t/p/w500'

  useEffect(() =>{
    const movie = async ()=>{
      try{
        const response = await getMovieById(id)
        console.log(response)
        setMovieId(response)
        setLenguages(response.spoken_languages)
        console.log(response.spoken_languages)
        setGenres(response.genres)
        console.log(response.genres)

      }catch(e){
        console.log(e)
      }
    }
    movie()
  },[id])


  return (
    <>
    <h1 className="title1">{movieId.original_title}</h1>
    <div className="list-group-movies" >
     <div className="">
     <h1 className="color-text1">Description</h1>
      <p className="color-text1">{movieId.overview}</p>
     </div>
      <div className= "detail-container">
        <ul className="color-text1 u-list">
          <h3 className="color-text1">Details</h3>
          <li>Date: {movieId.release_date}</li>
          <li>Duration: {movieId.runtime} Min.</li>
          <li>Popularity: {movieId.popularity}</li>
          <li>Vote: {movieId.vote_average}</li>
          <h5 className="color-text1">Idiomas:</h5>
          {lenguages.map((lenguage, index) => <li key= {index}>{lenguage.english_name} </li>)}
          <h5 className="color-text1">Generos:</h5>
          {genres.map((genre, index) => <li key= {index}> {genre.name} </li>)} 
        </ul>
      </div>
      <img className="img-detail2"src={URL+ movieId.backdrop_path} alt ={movieId.title}/>
      <img className="img-detail1"src={URL+ movieId.poster_path} alt ={movieId.title}/> 
    </div>
    </>
  )
}


// hacer foto de logo bien linea blanca abajo de logo
// fotter terminar imagen flashera
// header barrra y botenes de sing in y login
// condicional de spiner para cuando carga
// ver porque mierda se flashea en peliculas como shang chi and legend