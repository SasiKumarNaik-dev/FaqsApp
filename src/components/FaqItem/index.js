// Write your code here.

import './index.css'

const FaqItem = props => {
  const {item, toggleDisplay} = props
  const {id, questionText, answerText, isShowAnswer} = item
  console.log(isShowAnswer)
  const displayImg = isShowAnswer ? (
    <img
      src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
      alt="minus"
    />
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
      alt="plus"
    />
  )
  const getToggle = () => {
    toggleDisplay(id)
  }
  return (
    <li className="list">
      <div className="top-section">
        <h1 className="question">{questionText}</h1>
        <button type="button" className="btn" onClick={getToggle}>
          {displayImg}
        </button>
      </div>
      {isShowAnswer ? <p className="answer">{answerText}</p> : null}
    </li>
  )
}

export default FaqItem
