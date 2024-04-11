import './index.css'

const NavBar = props => {
  const {score, topScore, navBar} = props

  return (
    <nav className="nav-container">
      <div className="logo-contianer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      {navBar ? (
        <div className="score-container">
          <p className="score-discription">Score: {score}</p>
          <p className="score-discription">Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}

export default NavBar
