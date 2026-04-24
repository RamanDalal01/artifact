import React from 'react'
import { useState } from 'react'

const App = () => {

  const [randomNum, setRandomNum] = useState(0);


  let [count,setCount] =useState(0);
  function increase(){
    setCount(count = count + 1);
    console.log(count);
  }
  function decrease(){
    setCount(count=count-1);
  }

  const generateRandom = () => {
    const num = Math.floor(Math.random() * 9999999999) + 1;
    setRandomNum(num);
  };


  return (
    <div>
      <h4>Counter Application</h4>
      <h1>Count : {count}</h1>
      <button onClick = {increase}>Increment</button>
      <button onClick = {decrease}>decrement</button>

      <h1>Salary Generator</h1>
      <p>Salary : {randomNum}</p>
      <button onClick={generateRandom}>Generate</button>

    </div>
  )
}

export default App

//-- State/State Variable----react does not keep track of regular variable.
//----It only tracks stste variable, If state variable change react re-renders the component and update the component.


//---How to declare a state variable ?
//----we use a hook called useStable()