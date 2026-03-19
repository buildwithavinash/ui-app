import { useState } from "react"

const ToggleText = () => {

    const [text, setText] = useState("Bulb is Off");
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if(!isClicked){
            setIsClicked((p) => !p);
            setText("Bulb is On");
        }else {
            setIsClicked((p)=> !p)
            setText("Bulb is off");
        }
    }

  return (
    <div className="flex items-center justify-center flex-col">
        <h1>Toggle Text</h1>

        <div className="text-center">
            <p>{text}</p>
            <button className="border border-slate-800 p-2 rounded-xl bg-amber-400 font-semibold" onClick={handleClick}>Click to change text</button>
        </div>
    </div>
  )
}

export default ToggleText