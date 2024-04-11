/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickLikedEmojiList: [],
    navBar: true,
    winOrLoss: true,
  }

  onClickAgainPlay = value => {
    const {emojisList} = this.props
    const {topScore, score} = this.state

    if (value === emojisList.length) {
      this.setState({score: 0, topScore: 0, clickLikedEmojiList: []})
    } else if (value > topScore) {
      this.setState({topScore: score, score: 0, clickLikedEmojiList: []})
    } else {
      this.setState({score: 0, clickLikedEmojiList: []})
    }

    this.setState(prevState => ({
      winOrLoss: !prevState.winOrLoss,
      navBar: !prevState.navBar,
    }))
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickLikedEmojiList} = this.state

    const isPresentEmoji = clickLikedEmojiList.includes(id)

    if (isPresentEmoji) {
      this.setState(prevState => ({
        winOrLoss: !prevState.winOrLoss,
        navBar: !prevState.navBar,
      }))
    } else {
      if (emojisList.length - 1 === clickLikedEmojiList.length) {
        this.setState(prevState => ({
          winOrLoss: !prevState.winOrLoss,
          navBar: !prevState.navBar,
        }))
      }
      this.setState(prevState => ({
        clickLikedEmojiList: [...prevState.clickLikedEmojiList, id],
        score: prevState.score + 1,
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, topScore, clickLikedEmojiList, winOrLoss, navBar} = this.state
    const {emojisList} = this.props

    const shuffledImage = this.getShuffledEmojisList()

    return (
      <div>
        <NavBar score={score} topScore={topScore} navBar={navBar} />

        <div className="emoji-game-container">
          {winOrLoss ? (
            <ul className="unorder-list-container">
              {shuffledImage.map(eachList => (
                <EmojiCard
                  emojisList={eachList}
                  key={eachList.id}
                  onClickEmoji={this.onClickEmoji}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              score={score}
              clickLikedEmoji={clickLikedEmojiList}
              emojisList={emojisList}
              onClickAgainPlay={this.onClickAgainPlay}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
