import './index.css'

const WinOrLoseCard = props => {
  const {score, clickLikedEmoji, emojisList, onClickAgainPlay} = props

  const lengthOfList = clickLikedEmoji.length === emojisList.length

  const onClickPlayAgain = () => {
    onClickAgainPlay(score)
  }

  return lengthOfList ? (
    <div className="win-container">
      <div className="content-container">
        <h1 className="win-heading"> You Won</h1>
        <p className="best-score">Best Score</p>
        <p className="score">{score}/12</p>
        <button type="button" onClick={onClickPlayAgain} className="paly-again-button">
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img
          className="win-image"
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png" alt="win or lose"
        />
      </div>
    </div>
  ) : (
    <div className="win-container">
      <div className="content-container">
        <h1 className="win-heading"> You Lose</h1>
        <p className="best-score">Score</p>
        <p className="score">{score}/12</p>
        <button type="button" onClick={onClickPlayAgain} className="paly-again-button">
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img
          className="win-image"
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png" alt="win or lose"
        />
      </div>
    </div>
  )
}

export default WinOrLoseCard
