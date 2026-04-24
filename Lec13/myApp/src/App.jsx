import { createContext } from 'react'
import Child1 from './Components/child1';

// Prop drilling: Context API or useContext is used to solve the problem of prop drilling
export const datacontext = createContext();

function App() {
  const data = { value: 10 };

  return (
    <div>
      <datacontext.Provider value={data}>
        <Child1></Child1>
      </datacontext.Provider>
    </div>
  )
}

export default App