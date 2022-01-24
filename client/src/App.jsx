import { Loader, Transactions, Welcome } from "./components"

const App = () => {
  return (
    <div className="App">
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Welcome />
        </div>
        <Transactions />
      </div>
    </div>
  )
}

export default App
