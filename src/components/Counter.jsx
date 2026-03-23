import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

  return (
   <div className="border border-slate-400 rounded-xl mx-auto max-w-md flex justify-center items-center flex-col p-2 gap-4">
        <h1>Counter App</h1>

        <div className="bg-slate-400 px-8 py-4 text-2xl rounded-2xl">
            <p>{count}</p>
        </div>
        <div className="flex gap-2 *:cursor-pointer">
            <button onClick={()=>setCount((prev) => prev + 1)} className="border border-slate-700 bg-green-400 px-3 py-1.5 rounded-lg font-semibold">+</button>
            <button onClick={()=>setCount(0)} className="border border-slate-700 bg-yellow-400 px-3 py-1.5 rounded-lg font-semibold">Reset</button>
            <button onClick={()=>setCount((prev) => prev - 1)} className="border border-slate-700 bg-red-400 px-3 py-1.5 rounded-lg font-semibold">-</button>
        </div>
   </div>
  )
}

export default Counter