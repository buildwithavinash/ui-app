import { useState } from "react";

const SearchFilter = () => {
  let data = [
    "apple",
    "mango",
    "orange",
    "banana",
    "carrot",
    "tomato",
    "fruit",
    "watermelon",
    "custard",
    "litchi",
    "coconut",
  ];

  const [query, setQuery] = useState("");
  

  const handleSearch = (e) => {
    let val = e.target.value;
    setQuery(val);
  };

  const filteredArr =  data.filter((d) => {
          return d.toLowerCase().includes(query.trim().toLowerCase());
        })
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h1>Search Filter</h1>

        <div>
          <input
            type="search"
            name=""
            id=""
            value={query}
            onChange={handleSearch}
            className="border border-slate-500 rounded-xl px-2 py-1"
          />
        </div>
        <div>
            {filteredArr.length === 0 && <p>No results found</p>}
          {filteredArr.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
