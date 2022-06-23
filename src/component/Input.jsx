import React from 'react'

export default function Input(props) {
    const {type, name, id, value, placeholder, change} = props
  return (
    <>
      <input className="inputs" type={type} name={name} id={id} value={value} placeholder={placeholder} onChange={change}/>
    </>
  )
}
