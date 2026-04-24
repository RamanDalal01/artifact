import React from 'react'
import { Routes, Route, BrowserRouter, useParams } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <header>
        {/* Navigation links */}
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/users/1'>User 1</a></li>
          <li><a href='/users/2'>User 2</a></li>
          <li><a href='/users/3'>User 3</a></li>
        </ul>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path = '/users/:id' element={<User />} />
        <Route path='*' element={<PageNotFound />} />
        
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  return <h1>Home page</h1>
}

function About() {
  return <h1>About page</h1>
}

function User() {
  let{id} =useParams()
  return <h1>User page for user with id: {id}</h1>
}
function PageNotFound() {
  return <h1>Page not found</h1>
}

export default App
