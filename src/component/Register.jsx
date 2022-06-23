import React from 'react'
import Input from '../component/Input'
export default function Register() {
  return (
    <>
    <h3 className="title1">Registro</h3>
      <form>
        <Input  type="text" name="nombre"  placeholder="Nombre"/>
        <Input  type="text" name="apellido"  placeholder="Apellido"/>
        <Input  type="email" name="email"  placeholder="Email"/>
        <Input  type="password" name="password"  placeholder="contraseña"/>
        <br/>
        <button className ="button-menu"type="submit" name="">Registrate</button>
      </form>
    </>
  )
}
