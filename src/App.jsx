import Counter from "./components/Counter"
import LiveCharacter from "./components/LiveCharacter"
import ToggleText from "./components/ToggleText"

const App = () => {
  return (
    <div className="h-screen bg-slate-300 p-4">
      <Counter />
      <hr className="my-4 text-slate-500"/>
      <LiveCharacter />
      <hr className="my-4 text-slate-500"/>
      <ToggleText />
    </div>
  )
}

export default App