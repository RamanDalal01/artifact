import React from 'react'

function Child2(props) {
  return (
    <div>
      <h1>Child2</h1>
      {props.data !== null && <h4>Data from child1 is {props.data}</h4>}
    </div>
  )
}

export default Child2