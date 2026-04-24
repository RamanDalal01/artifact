import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [boxColor, setBoxColor] = useState('#3498db')

  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
    setBoxColor(randomColor)
  }

  return (
    <div className="container">
      <div className="box" style={{ backgroundColor: boxColor }}></div>
      <button className="button" onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default App
