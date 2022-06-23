import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Movie(props) {
    const movie = props
    const URL = 'https://image.tmdb.org/t/p/w500'
  return (
    <div className="one-movie">

    <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src={URL+movie.poster_path} />
    </Card>

    <Button as = {Link} to = {'/movie/' + movie.id} className="button-menu">Details</Button>
    </div>
  )
}
