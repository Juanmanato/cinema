import React from 'react'
import { useState, useEffect} from 'react'
import { getInfo } from '../service/MovieService'
import Input from './Input'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

export default function Searching() {

const [data, setData] =useState([])
const [search, setSearch] = useState('')


console.log(data)
useEffect(() =>{
    console.log(search)
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
console.log(results)
  return (
    <>
      <div className="search-bar">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <Input className="search-bar-input inputs" type="text" id="search" placeholder="search movie..." value= {search} change = {searcher}/>
      </div>
    </>
  )
}
 