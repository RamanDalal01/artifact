import {useContext} from 'react'
import {DataContext} from '../App'
const Child4 = () => {
  const value = useContext(DataContext);
  console.log(value);
  return (
    <div>
      <h1>Chidl4</h1>
      <h3>Data is {value}</h3>
    </div>
  )
}

export default Child4
