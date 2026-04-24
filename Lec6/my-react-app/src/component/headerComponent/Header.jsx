import React from 'react'
import "./Header.css"
const Header = (props) => {
    console.log(props)
  return (
    <div>
      <h4>Name: {props.name}</h4>
      <h4>age: {props.age}</h4>
      <h4>Address: {props.Address}</h4>
      <h1 className='Header'>Header</h1>
    </div>
  )
}

// name export 
export function sum(a,b){
    return a+b;
}
export function multiple(a,b){
    return a*b;
}

export default Header
