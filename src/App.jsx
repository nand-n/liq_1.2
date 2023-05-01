import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(null)

  const handleClick=()=>{
    let i=0;
    setCount(i++)
  }

  return (
    <div className="container  items-center flex justify-center mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
    <p className="text-3xl text-gray-700 font-bold mb-5">
      Welcome! You clicked {count} times!!
    </p>
    <button  className="p-4 bg-slate-300 ml-5 rounded-lg " onClick={handleClick}>Button</button>
  </div>
  )
}

export default App