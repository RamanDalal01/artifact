import React , {useEffect , useState} from 'react'
import './App.css'

const App = () => {
  let [count, setCount] = useState(0);
  let [random, setRandom] = useState(0);
  
  // Stopwatch state variables
  let [hours, setHours] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [isRunning, setIsRunning] = useState(false);

  // Stopwatch effect - runs every second when isRunning is true
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds === 59) {
            setMinutes(prevMinutes => {
              if (prevMinutes === 59) {
                setHours(prevHours => prevHours + 1);
                return 0;
              }
              return prevMinutes + 1;
            });
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  // Start the stopwatch
  function startStopwatch() {
    setIsRunning(true);
  }

  // Stop the stopwatch
  function stopStopwatch() {
    setIsRunning(false);
  }

  // Reset the stopwatch
  function resetStopwatch() {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  function someWork(){
    console.log("Work is done");
  }
  function runOnCount(){
    console.log("count is changed");
  }

useEffect(() =>{
  someWork();

}, []);

  // Format time to always show two digits
  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      
      {/* Stopwatch Display */}
      <div className="stopwatch-display">
        <h2>{formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}</h2>
      </div>
      
      {/* Stopwatch Controls */}
      <div className="stopwatch-controls">
        {!isRunning ? (
          <button onClick={startStopwatch}>Start</button>
        ) : (
          <button onClick={stopStopwatch}>Stop</button>
        )}
        <button onClick={resetStopwatch}>Reset</button>
      </div>

      <hr />

      <h1>useEffect Demo</h1>
      <button onClick ={()=> setCount(count+1)}>Click</button>
      <button onClick ={()=> setRandom(Math.random())}>Random</button>
   
      <h1>Count is {count}</h1>
      <h3>Random is {random}</h3>
    </div>
  )
}

export default App


//-----React Lifecycle Phases

//--Mounting----Component is created and inserted into the DOM.
//--Updating----Component re-renders when props or state change.
//--Unmounting---Component is removed from the DOM.

//------Class Components
//-----life cycle methods
// --componentDidMount()
// --componentDidUpdate()
// --componentDidUnmount()
//---to manage all life cycle phase in funvtional component We use a hook callled useEffect.

// ----Syntax of useEffect
//--useEffect(callback,[])  // --[]-> dependencyy array (optional)

