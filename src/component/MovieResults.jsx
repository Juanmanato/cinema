import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function MovieResults(props) {
  const result = props
    const URL = 'https://image.tmdb.org/t/p/w500'
  return (
    <div className="div-movie">

    <Card >
            <Card.Img variant="top" style={{ width: '14rem' }} src={URL+result.poster_path} />
    </Card>

    <Button as = {Link} to = {'/movieresults/' + result.id} className="button-menu">Details</Button>
    </div>
  )
}