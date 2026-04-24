import React from 'react'
import Header from './component/headerComponent/Header'
import Footer from './component/footerComponent/Footer'
import { sum } from './component/headerComponent/Header'
import { multiple } from './component/headerComponent/Header'


const App = () => {
  let a=19990;
  let b=5;

  return (
    <div>
    {sum(a,b)}
      <Header name="raman" age= {21} Address="Hisar"></Header>
      
      <h4>sum of {a} and {b} is :{sum(a,b)}</h4>
      <Footer group={26} class={502}></Footer>

    </div>
  )
}

export default App


// PROPS---is a way to pass data from a parent component to a child component.
