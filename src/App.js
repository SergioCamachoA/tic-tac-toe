import { GridContainer } from "./components/GridContainer"
import "./style/App.css"
import { Score } from "./components/Score"
import { GameMode } from "./components/GameMode"
import { Player } from "./components/Player"

function App() {
  return (
    <div className="App">
      <Score />
      <GridContainer />
      <GameMode />
      <Player />
    </div>
  )
}

export default App
