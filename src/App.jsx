import Counter from "./components/Counter"
import LiveCharacter from "./components/LiveCharacter"

const App = () => {
  return (
    <div className="h-screen bg-slate-300 p-4">
      <Counter />
      <hr className="my-4 text-slate-500"/>
      <LiveCharacter />
    </div>
  )
}

export default App