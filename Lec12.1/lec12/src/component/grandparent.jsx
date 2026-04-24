import React from 'react'
import { createContext } from 'react';
import Child1 from './child1';
import Child4 from './child4';

import './App.css';

export let datacontext = createContext();

const grandparent = () => {
    let hello = 56;
  return (
    <div>
      <datacontext.Provider value={hello}>
        <h1>Grandparent Component</h1>
        <p>Hello value: {hello}</p>
        <Child1 />
        <Child4 />
      </datacontext.Provider>
    </div>
  )
}

export default grandparent
