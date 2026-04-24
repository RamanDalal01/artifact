import React from 'react'



// functional component -- it returns html like code
const App = () => {
  let a=10;
  let b=20;

  return (
    <div>
    <Header/>
      <h1>Hello World</h1>
      <h2>{a+b}</h2>
      
    </div>
  )
}

export default App

// jsx is a (XML) syntax which look like html , and we can embeded JS expression directly in the code

//rule 1--component name should be in capital
function Header(){
  return(
    <div>
      <div>logo</div>
      <div>
        <nav>
          <ul>
            <li className='header-items'>Home</li>
            <li className='header-items'>About</li>
            <li className='header-items'>Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

// Difference btw HTML and JSX ?

// class(HTML) -- // className(JSX).
// non closing tag -- // every tag has a closing tag.
// you cannot write javascript inside html code --// you can directly embed js inside jsx code using curly braces.
