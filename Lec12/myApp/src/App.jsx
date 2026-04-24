import { useState } from 'react'


const App = () => {
  const [randomNumber, setRandomNumber] = useState(null)
  const [result, setResult] = useState('')

  const generateRandomNumber = () => {
    // Generate random number between 1 and 10
    const number = Math.floor(Math.random() * 10) + 1
    setRandomNumber(number)
    
    // Check if the number is 7
    if (number === 7) {
      setResult('You Win! 🎉')
    } else {
      setResult('You Lose! 😢')
    }
  }
  
  return (
    <div className="game-container">
      <h1>Random Number Game</h1>
      <div className="box">
        {randomNumber && <p className="number">{randomNumber}</p>}
      </div>
      <button onClick={generateRandomNumber} className="generate-btn">
        Generate Number
      </button>
      {result && (
        <div className={`result-box ${result.includes('Win') ? 'win' : 'lose'}`}>
          <p className="result-text">{result}</p>


        </div>
      )}
    </div>
  )
}

export default App
