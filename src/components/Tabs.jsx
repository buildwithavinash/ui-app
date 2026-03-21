import { useState } from "react"

const Tabs = () => {

    const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center">
        <div className="text-center">
            <h1>Tabs</h1>

            <div>
                <div className='tabs flex gap-4'>
                    <button className={`border border-slate-600 ${activeIndex === 0 ? "bg-slate-800 text-slate-100" : ""}`} onClick={()=> setActiveIndex(0)}>Home</button>
                    <button className={`border border-slate-600 ${activeIndex === 1 ? "bg-slate-800 text-slate-100" : ""}`} onClick={()=> setActiveIndex(1)}>Services</button>
                    <button className={`border border-slate-600 ${activeIndex === 2 ? "bg-slate-800 text-slate-100" : ""}`} onClick={()=> setActiveIndex(2)}>About</button>
                </div>

                <div className='tab-panel'>
                    <div className={`${activeIndex === 0 ? "" : "hidden"}`}>tab1</div>
                    <div className={`${activeIndex === 1 ? "" : "hidden"}`}>tab2</div>
                    <div className={`${activeIndex === 2 ? "" : "hidden"}`}>tab3</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tabs