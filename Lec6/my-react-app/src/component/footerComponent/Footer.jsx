import React from 'react'
import "./Footer.css"
const Footer = (props) => {
  return (
    <div>
     <h1 className='Footer'>Footer</h1> 
     <h3>class: {props.class}</h3>
     <h3>group: {props.group}</h3>

    </div>
  )
}

export default Footer
