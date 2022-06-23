import React from 'react'
import Menu from '../component/Menu'
import Searching from '../component/Searching'
export default function Header() {
  return (
    <div className="header-logo" >
      <Menu/>
      <Searching/>
     </div>
  )
}
