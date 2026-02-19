import { WINNER_SCORE } from './constants'
import './Player.css'

function Player(props) {
  const { isActive, name, score, currentScore } = props
  // código js y retorna código html, 1 solo elemento "padre"
  console.log(props)
  // const classes = `player ${isActive ? 'player--active' : ''}`
  // si el score>=10 en vez de player--active, se muestra player--winner
  // const classes = `player ${
  //   score >= 10 ? 'player--winner' : isActive ? 'player--active' : ''
  // }`

  // hazlo con if-else
  let classes = 'player'
  if (score >= WINNER_SCORE) {
    classes += ' player--winner'
  } else if (isActive) {
    classes += ' player--active'
  }

  return (
    <section className={classes}>
      <h2 className="name">{name}</h2>
      <p className="score">{score}</p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score">{currentScore || 0}</p>
      </div>
    </section>
  )
}

export default Player
