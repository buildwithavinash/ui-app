import { useState } from "react"

const LiveCharacter = () => {

    const [char, setChar] = useState("")


  return (
    <div className="flex items-center justify-center flex-col">
        <div>Live Character Counter</div>
        <div>
            <textarea name="" id="" value={char} onChange={(e)=>setChar(e.target.value)} className="border border-slate-500"></textarea>
        </div>
        <div>
            <p>Character count:{char.length}</p>
        </div>

        <button onClick={()=>setChar("")}>Reset</button>
    </div>

  )
}

export default LiveCharacter