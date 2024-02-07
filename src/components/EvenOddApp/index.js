// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, isEven: true}

  increase = async () => {
    const randomNumber = await Math.ceil(Math.random() * 100)
    this.setState(previousState => ({
      count: previousState.count + randomNumber,
    }))

    const {count} = this.state
    console.log(count)

    if (count % 2 === 0) {
      this.setState(() => ({isEven: true}))
    } else {
      this.setState(() => ({isEven: false}))
    }
  }

  render() {
    const {count, isEven} = this.state
    return (
      <div className="main">
        <div className="card">
          <h1 className="h1">Count {count}</h1>
          {isEven ? (
            <p className="p1">Count is Even</p>
          ) : (
            <p className="p1">Count is Odd</p>
          )}
          {
            // eslint-disable-next-line
            <button className="button" onClick={this.increase}>
              Increment
            </button>
          }
          <p className="p2">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
