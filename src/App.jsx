import { useState, useCallback, useEffect, useRef } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)

  const copyClip= useCallback(()=>{
    passwRef.current?.select()
    passwRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(passw)
  },[passw])


  const [passw, setPassw] = useState("")
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWX YZ"
    if (num) str += "0123456789"
    if (char) str += "!@#$%^&*()[]{}~"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassw(pass)
  }, [length, num, char, setPassw])
  
  useEffect(()=>{
    passwordGenerator()
  },[length, num, char, setPassw])
  
  const passwRef= useRef();

  
  const [color, setColor] = useState("white")
  const changeColorWithState = (newColor) => {
    setColor(newColor);
    document.body.style.backgroundColor = newColor;
  };

  const colorRef = useRef(null)
  const changeColorWithRef = () => {
    const newColor = colorRef.current.value;
    document.body.style.backgroundColor = newColor;
  };

  // useEffect(()=>{
  //   alert(`The BG color is set to ${color}`)
  // }, [color])

  return (
    <>
      <div className="h-screen py-8 duration-200">

                        {/* -------------- Password Generator --------------- */}
        <div className="max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-400 text-black-500">
          <h1 className="text-white">Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input type="text" value={passw} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly  ref={passwRef}></input>
            <button id="copyBtn" className="outline-none bg-blue-300 text-white px-3 py-.5 shrink-0" onClick={copyClip}>Copy</button>
          </div>
          <div className="flex text-sm gap-x-2">
            <div className=" flex item-center gap-x-1">
              <input type="range" min={8} max={24} value={length} className="cursor-pointer" onChange={(e) => { setLength(e.target.value) }} />
              <label htmlFor="">Length:{length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox" defaultChecked={num} id="numInput" onChange={() => { setNum((prev) => !prev) }} />
              <label htmlFor="">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox" defaultChecked={char} id="numInput" onChange={() => { setChar((prev) => !prev) }} />
              <label htmlFor="">Character</label>
            </div>
          </div>
        </div>

                       {/* ---------------Change color with useRef--------------- */}
        <div className="max-w-md mx-auto shadow-md rounded-lg px-4 py-4 mt-6 bg-yellow-200 text-black-500">
          <h1 className="text-black">Custom change BG color</h1>
            <input type="text" className="rounded-2xl outline-none w-full py-1 px-3" placeholder="Enter colour"  ref={colorRef}></input>
            <button id="copyBtn" className="mt-4 rounded-2xl outline-none bg-blue-300 text-white px-3 py-1 shrink-0" onClick={changeColorWithRef}>Custom change</button>
          
        </div>

                   {/* ------------------- BG Changer useState -------------------- */}
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
               onClick={() => changeColorWithState("skyblue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "skyblue" }}>SkyBlue</button>
            <button
              onClick={() => changeColorWithState("LightGreen")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Lightgreen" }}>LightGreen</button>
            <button
              onClick={() => changeColorWithState("Violet")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "Violet" }}>Violet</button>
          </div>
        </div>

        {/*  */}


      </div>
    </>
  )
}

export default App
