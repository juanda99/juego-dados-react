import { useState } from 'react'
import './App.css'
import Player from './Player.jsx'

function App() {
  // definimos nuestras variables de estado de la app
  const [score, setScore] = useState([0, 0])
  const [currentScore, setCurrentScore] = useState(0)
  const [activePlayer, setActivePlayer] = useState(0)
  const [dice, setDice] = useState(0)

  const handleNewGame = () => {
    setScore([0, 0])
    setCurrentScore(0)
    setActivePlayer(0)
    setDice(0)
  }
  const handleRollDice = () => {
    // obtener un número aleatorio entre 1 y 6
    const diceNumber = Math.trunc(Math.random() * 6) + 1
    setDice(diceNumber)
    setCurrentScore(currentScore + diceNumber)
  }

  const handleHold = () => {
    // actualizar el score del jugador activo
    const newScore = [...score]
    newScore[activePlayer] += currentScore
    setScore(newScore)
    // resetear el current score y cambiar de jugador
    setCurrentScore(0)
    setActivePlayer(activePlayer === 0 ? 1 : 0)
  }

  return (
    <main>
      <Player
        name="Player 1"
        score={score[0]}
        currentScore={activePlayer === 0 && currentScore}
        isActive={activePlayer === 0}
      />
      <Player
        name="Player 2"
        score={score[1]}
        currentScore={activePlayer === 1 && currentScore}
        isActive={activePlayer === 1}
      />
      {dice && (
        <img
          src={`/imagenes/dice-${dice}.png`}
          alt="Playing dice"
          className="dice"
        />
      )}
      <button className="btn btn--new" onClick={handleNewGame}>
        🔄 New game
      </button>
      <button className="btn btn--roll" onClick={handleRollDice}>
        🎲 Roll dice
      </button>
      <button className="btn btn--hold" onClick={handleHold}>
        📥 Hold
      </button>
    </main>
  )
}

export default App
