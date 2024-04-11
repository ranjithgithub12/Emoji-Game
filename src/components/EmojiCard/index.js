import './index.css'

const EmojiCard = props => {
  const {emojisList, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojisList

  const onClickImage = () => {
    onClickEmoji(id)
  }

  return (
    <li className="list-of-emoji">
      <button type="button" className="button-image" onClick={onClickImage}>
        <img className="emoji-image" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
