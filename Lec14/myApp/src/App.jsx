import React from 'react'
import Child1 from './component/Child1';
import Child2 from './component/Child2';
import './App.css';

function App() {
  let [data,setData]=React.useState(null);
  function getData(data){
    console.log("Data from child",data);
    setData(data);
  }
  return (
    <div>
      <Child1 getData={getData}></Child1>
      <Child2 data={data}></Child2>
      
    </div>
  )
}

export default App