// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    const {faqsList} = this.props
    this.state = {faqsList}
  }

  toggleDisplay = id => {
    this.setState(prevState => ({
      faqsList: prevState.faqsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isShowAnswer: !eachItem.isShowAnswer}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {faqsList} = this.state
    console.log(faqsList)
    return (
      <div className="app-page">
        <div className="app">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-div">
            {faqsList.map(eachItem => (
              <FaqItem
                item={eachItem}
                key={eachItem.id}
                toggleDisplay={this.toggleDisplay}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
