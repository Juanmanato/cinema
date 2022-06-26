import React from 'react'
import MovieResults from './MovieResults'

export default function ResultadoSeatch(props) {
  const {results} = props
  return (
    <div>
      <div className="list-group-movies">
      {results?.map((result, index) => <MovieResults key={index} {...result} />)}
      </div>
    </div>
  )
}

