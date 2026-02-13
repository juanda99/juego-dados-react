import './Player.css'

function Player(props) {
  const { isActive, name, score, currentScore } = props
  // código js y retorna código html, 1 solo elemento "padre"
  console.log(props)
  const classes = `player ${isActive ? 'player--active' : ''}`
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
