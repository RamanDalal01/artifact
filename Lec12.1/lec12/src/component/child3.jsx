import React, { useContext } from 'react'
import { datacontext } from '../App';

function Child3  (props)  {
  let value=useContext(datacontext);
  return (
    <div>
      <h1>Child3</h1>
      <h3>data is {value}</h3>
    </div>
  )
}

export default Child3