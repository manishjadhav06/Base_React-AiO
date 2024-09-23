import { useState, useCallback } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [passw, setPassw] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWX YZ"
    if (num) str += "0123456789"
    if (char) str += "!@#$%^&*()[]{}~"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }
    setPassw(pass)
  }, [length, num, setPassw])
  
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-400 text-orange-500">
        <h1 className="text-white">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={passw} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly />
          <button className="outline-none bg-blue-300 text-white px-3 py-.5 shrink-0">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className=" flex item-center gap-x-1">
            <input type="range" min={8} max={16} value={length} className="cursor-pointer" onChange={(e)=>{setLength(e.target.value)}}/>
            <label htmlFor="">Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={num} id="numInput" onChange={()=>{setNum((prev)=>!prev)}}/>
            <label htmlFor="">Numbers</label>           
          </div>
          <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked={char} id="numInput" onChange={()=>{setChar((prev)=>!prev)}}/>
          <label htmlFor="">Character</label>           
          </div>
        </div>
      </div>
    </>
  )
}

export default App
