import Accordion from "./components/Accordion"
import Counter from "./components/Counter"
import LiveCharacter from "./components/LiveCharacter"
import SearchFilter from "./components/SearchFilter"
import Tabs from "./components/Tabs"
import ToggleText from "./components/ToggleText"

const App = () => {
  return (
    <div className="min-h-screen bg-slate-300 p-4">
      <Counter />
      <hr className="my-4 text-slate-500"/>
      <LiveCharacter />
      <hr className="my-4 text-slate-500"/>
      <ToggleText />
      <hr className="my-4 text-slate-500"/>
      <Accordion />
      <hr className="my-4 text-slate-500"/>
      <Tabs />
      <hr className="my-4 text-slate-500"/>
      <SearchFilter />
    </div>
  )
}

export default App