import { useState } from 'react'
import './App.css'
// importamos imagen de dice-1.png
import dice1 from './imagenes/dice-1.png'
import dice2 from './imagenes/dice-2.png'
import dice3 from './imagenes/dice-3.png'
import dice4 from './imagenes/dice-4.png'
import dice5 from './imagenes/dice-5.png'
import dice6 from './imagenes/dice-6.png'
import Player from './Player.jsx'
import { WINNER_SCORE, WINNER_MESSAGE } from './constants'

function App() {
  // definimos nuestras variables de estado de la app
  const [score, setScore] = useState([0, 0])
  const [currentScore, setCurrentScore] = useState(0)
  const [activePlayer, setActivePlayer] = useState(0)
  const [dice, setDice] = useState(0)

  const dados = [null, dice1, dice2, dice3, dice4, dice5, dice6]

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
    // si el número es 1, resetear el current score y cambiar de jugador
    if (diceNumber === 1) {
      setCurrentScore(0)
      setActivePlayer(activePlayer === 0 ? 1 : 0)
      return
    }
    // si el número no es 1, sumar el número al current score y mostrarlo en el jugador activo
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
      {dice && <img src={dados[dice]} alt="Playing dice" className="dice" />}
      <button className="btn btn--new" onClick={handleNewGame}>
        🔄 New game
      </button>
      <button
        className="btn btn--roll"
        onClick={handleRollDice}
        disabled={score[0] >= WINNER_SCORE || score[1] >= WINNER_SCORE}
      >
        🎲 Roll dice
      </button>
      <button
        className="btn btn--hold"
        onClick={handleHold}
        disabled={score[0] >= WINNER_SCORE || score[1] >= WINNER_SCORE}
      >
        📥 Hold
      </button>
    </main>
  )
}

export default App
