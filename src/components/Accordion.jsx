import { useState } from "react"

const Accordion = () => {

    const [openIndex, setOpenIndex] = useState(null);
    
    const handleClick = (index) => {
        if(openIndex === index){
            setOpenIndex(null)
        }else {
            setOpenIndex(index)
        }
    }
  return (
    <div className="flex flex-col items-center justify-center">

        <h1>Accordion</h1>
        <div className="min-w-xl mx-auto border border-emerald-500 p-4">
            <div className="accord-item border border-slate-500 p-1">
                <div className="question flex justify-between cursor-pointer" onClick={()=> handleClick(0)}>What is react? <span>+</span></div>
                <div className={`answer ${openIndex === 0 ? "" : "hidden"}`}>React is reacting</div>
            </div>

             <div className="accord-item border border-slate-500 p-1">
                <div className="question flex justify-between cursor-pointer" onClick={()=> handleClick(1)}>What is react? <span>+</span></div>
                <div className={`answer ${openIndex === 1 ? "" : "hidden"}`}>React is reacting</div>
            </div>

             <div className="accord-item border border-slate-500 p-1">
                <div className="question flex justify-between cursor-pointer" onClick={()=> handleClick(2)}>What is react? <span>+</span></div>
                <div className={`answer ${openIndex === 2 ? "" : "hidden"}`}>React is reacting</div>
            </div>
        </div>
    </div>
  )
}

export default Accordion