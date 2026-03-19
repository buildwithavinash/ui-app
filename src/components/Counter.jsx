import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

  return (
   <div className="border border-slate-900 rounded-xl mx-auto w-1/2 flex justify-center items-center flex-col">
        <h1>Counter App</h1>

        <div>
            <p>{count}</p>
        </div>
        <div>
            <button onClick={()=>setCount((prev) => prev + 1)} className="border border-slate-700 bg-green-400 ">+</button>
            <button onClick={()=>setCount(0)}>Reset</button>
            <button onClick={()=>setCount((prev) => prev - 1)}>-</button>
        </div>
   </div>
  )
}

export default Counter