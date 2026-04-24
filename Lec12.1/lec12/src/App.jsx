// import { useState, useEffect } from 'react'
// import axios from 'axios'

// const App = () => {
//   //let [users, setUsers] = useState([{id:1,name:"Rishabh",age:20},{id:2,name:"Raman",age:56},{id:3,name:"Rohit",age:50}])
//   let [users, setUsers] = useState([])

//   useEffect(() => {
//     getUsers()
//   }, [])
  
  
//   async function getUsers() {
//     //   https://jsonplaceholder.typicode.com/users
//     try{    
//       let response = await axios.get("https://jsonplaceholder.typicode.com/users")
//       let userData = response.data;
//       console.log(userData)
//       setUsers(userData)
//     }catch(err){
//       console.log(err)
//     }
//   }
//   //useEffect is used to manage lifecycle of the component. It is used to perform side effects in the component. It is called after the component is rendered. It is used to fetch data from an API, set up a subscription, and manually change the DOM in React components.
//   return (
//     <div>
//       <h1>Axios</h1>
//       <h2>User List</h2>
//       <ul>
//         {/* <li className='user'>User 1</li>
//         <li className='user'>User 2</li>
//         <li className='user'>User 3</li>
//         <li className='user'>User 4</li> */}
//         {users.map((user) => {
//           return <li className='user' key={user.id}>{user.name}</li>
//         })
//         }
//       </ul>
//     </div>
//   )
// }

// export default App
// import { useState } from 'react'
// import './App.css'

// const App = () => {
//   // const [age, setAge] = useState(18);
//   const [randomNum, setRandomNum] = useState(null);
  
//   // function checkVotingEligibility(age){
//   //   if(age>=18){
//   //     return true
//   //   }else{
//   //     return false
//   //   }
//   // }
  
//   const generateNumber = () => setRandomNum(Math.floor(Math.random() * 10));
  
//   return (
//     <div>
//       <h1>Random Number Game</h1>
//       <div>
//         <button onClick={generateNumber}>Click Button</button>
//         <h2>Random Number: {randomNum}</h2>
//         {randomNum !== null && (randomNum === 7 ? 
//           <div>
//             <h2>Thala for a reason :)👾</h2>
//             <img src="https://imgs.search.brave.com/SpmxuOcWoXr9J7Hro75Xtpg3DXvEFg1jGY73vOb4LGY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzIxLzA4LzUw/LzM2MF9GXzMyMTA4/NTAyMF9YbDZIbVF2/TDExbmhMeUh6WWs0/cXZqYmU0ZTNhMGN4/Ty5qcGc" alt="winning" style={{width: '300px'}} />
//           </div> 
//           : 
//           <div>
//             <h2>You Lost :(</h2>
//             <img src="https://imgs.search.brave.com/q1IXr6UJq0P4xuEFthg7H7Wk3TkcDB9I-XEovhc4Eek/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWM4LmRlcG9zaXRw/aG90b3MuY29tLzEw/MzUyNTAvOTE4L2kv/NDUwL2RlcG9zaXRw/aG90b3NfOTE4NTM1/NC1zdG9jay1waG90/by15b3UtbG9zZS5q/cGc" alt="losing" style={{width: '300px'}} />
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default App
import { createContext } from 'react'
import Child1 from './component/child1';
import Child4 from './component/child4';
import './App.css';

// prop drilling :
// context api or useContext is used to solve the problem of prop drilling 
// kon read krta hai data ko : provider
// kon use krta hai data ko : consumer

export const datacontext = createContext();

function App() {
  const data = 10;
  
  return (
    <div>
      <datacontext.Provider value={data}>
        <Child1 />
        <Child4 />
      </datacontext.Provider>
    </div>
  )
}

export default App


