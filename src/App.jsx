import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User, { List, Wrapper } from './User'
import Contentbox from './ToDo'
import State, { Car, Gender, Increasecounter } from './State'
import Skills from './assets/Skills'
import UserTable from './assets/Map'
import Color from './assets/color'
import CollegeData from './assets/Collegedata'
const fruit=()=> {
  alert("apple")
}


function App() {
  let name = "Dharti Patel"
  let studobject = {
    name: "Dharti",
    dob: "24/11/1995",
    email: "dharti.mumgara@cmsminds.com"
  } 

  function callFun(){
    alert("function called")
  }

  // const fruit=()=> {
  //   alert("banana")
  // }
  const [val, setVal] = useState("Dharti");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [counter, setCounter] = useState(0);
const Counter = () => {
    setCounter(counter+1);
}
  
  return (
    <>
      <CollegeData />
      <Color />
      <UserTable />
      <Skills />
      <Wrapper color="pink" >
        <div class="main-text-box" style={{ border: "1px solid pink" }}>
          <h1>Hi, Good Morning</h1>
        </div>
    </Wrapper>
      <Wrapper color="blue">
        <div className="main-text-box" style={{ border: "1px solid blue" }}>
          <h1>How Are You?</h1>
        </div>
      </Wrapper>
    <h1>{counter}</h1>
    <button onClick={Counter}>Increase</button>
    <button onClick={() => {setCounter(counter-1)}}>Decrease</button>
     {/* <User/>
      <h1>Counter Value : {counter}</h1>
        } */}
      <button onClick={() => fruit()}>Click Me</button>
      {/* <Contentbox /> */}
      <Car />
      <Gender />
      {/* <Increasecounter /> */}
      <List studobject={studobject} />  
      <State />

      <input 
        type='text' value={val}
        onChange={(e) => setVal(e.target.value)} 
        placeholder='Enter value'
      />
      <input 
        type='text' value={username}
        onChange={(e) => setUsername(e.target.value)} 
        placeholder='Enter name'
      />
      <input 
        type='password' value={password}
        onChange={(e) => setPassword(e.target.value)} 
        placeholder='Enter password'
      />

      <h1>{val}</h1>
      <h1>{username}</h1>
      <h1>{password}</h1>
      <button onClick={() => setVal("")}>Clear Me</button>
      <button>submit</button>
      <button onClick={() => {
        setUsername("");
        setPassword("");
      }}>Clear</button>
      {/* <button onClick={() => setPassword("")}>Clear Me</button> */}
    </>
  )
}

export default App
