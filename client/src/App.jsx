import { useState } from 'react'

import './App.css'

function App() {
  const [names, setNames] = useState(["app", "controllers", ""])
const value = names.at(-1)

const changeHandle = e => {
  if(e.target.value.includes("/")){
    setNames(names => [
      ...names,
      ""
    ])
  } else {
  setNames(names => [
    ...names.slice(0, -1),
    e.target.value
  ])
}
}

const keyDownHandle = (e) => {
  if (e.key === "Backspace" && !e.target.value){
    e.preventDefault()
setNames(names => names.slice(0, -1))
  }
  
}

  return (
  <div className= "p-4 container mx-auto bg-black"> 
       <h1 className="text-1xl font-bold text-white mb-3">
      React Test Case
    </h1>
    <nav className='flex items-center gap-1.5 mb-3'>
      {names.slice(0, -1).map((name, index) => (
        <>
        <button className='text-blue-500 hover:underline' key={index} >
        {name}
        </button>
        <div className='text-zinc-500'>
          /
        </div>
        </>
      ))}
    <input type="text"
    value={value}
    onChange={changeHandle}
    onKeyDown={keyDownHandle}
    className="border border-zinc-700 rounded-md w-[200px] px-1.5 bg-transparent outline-none text-white">
    
    </input>

<button
disabled={!value}
className="h-10 rounded bg-blue-600 text-white px-4 disabled:opacity-50 ml-auto" 
>
  Commit Changes
</button>

    </nav>
       <prev className="text-white">{JSON.stringify(names, null, 2)}</prev>
  </div>
  )
}

export default App
