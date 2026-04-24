import React from 'react'

function Child1 (props) {
    let data = 18;
    let getData = props.getData;
    function sendData (data) {
        getData(data);
    }
  return (
    <div>
      <h1>Child1</h1>
      <button onClick={sendData}>Send Data</button>

    </div>
  )
}

export default Child1
