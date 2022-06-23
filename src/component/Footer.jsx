import React from 'react'
import Register from '../component/Register'
export default function Footer() {
  return (
    <div className="footer-container">
      <div className=" list-group-footer footer-logo">
    <div className="div-footer">
      <p className="title1">Beneficion de registrarte</p>
      <ul className="u-list">
        <li>Descuenos todos los meses</li>
        <li>crea tu listado de peliculas</li>
        <li>comenta tus experiencias</li>
      </ul>
    </div>
    <div className="div-footer">
    <Register/>
    </div>
    </div>
    </div>
  )
}
