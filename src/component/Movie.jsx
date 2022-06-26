import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Movie(props) {
    const movie = props
    const URL = 'https://image.tmdb.org/t/p/w500'
  return (
    <div className="div-movie">

    <Card >
            <Card.Img variant="top" style={{ width: '14rem' }} src={URL+movie.poster_path} />
    </Card>

    <Button as = {Link} to = {'/movie/' + movie.id} className="button-menu">Details</Button>
    </div>
  )
}
