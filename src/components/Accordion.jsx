import { useState } from "react";
import accordionData from "../data/accordionData.js";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Accordion</h1>

      {/* dynamic accordion */}

      <div className="w-xl mx-auto border border-emerald-500 p-4">
        {accordionData.map((a, index) => (
          <div key={a.id} className="accord-item border border-slate-500 p-1">
            {/* question */}
            <div
              className="question flex justify-between cursor-pointer"
              onClick={() => handleClick(index)}
            >
              {a.title}
              <span
                className={`${openIndex === index ? "rotate-45" : ""} transition-all duration-200`}
              >
                +
              </span>
            </div>

            {/* answer */}
            <div className={`transition-all duration-300 overflow-hidden answer ${openIndex === index ? "max-h-40" : "max-h-0"}`}>
              {a.content}
            </div>
          </div>
        ))}
      </div>

      {/* ................. */}
    </div>
  );
};

export default Accordion;
