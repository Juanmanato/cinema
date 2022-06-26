import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "../pages/Home"
import Detail from '../pages/Detail'

export default function PublicRoute() {
  return (
    <div>
      <Routes>
            <Route path="/" element= {<Home/>}/>
            <Route path="/movie/:id" element= {<Detail/>}/>
            <Route path="/movieresults/:id" element= {<Detail/>}/>   
      </Routes>
    </div>
  )
}
