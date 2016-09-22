import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router'

class Main extends Component {
  static defaultProps = {
    currentTask: 'Task1'
  }

  render () {
    return <div className='main'>
      <Header />
      <h1>Ready to Work?</h1>
      <br />
      <div className='question'>
        <h3>How much</h3>
        <h2>FREE TIME</h2>
        <h3>do you have?</h3>
      </div>
      <div className='input-container'>
        <div className='input hours'>
          <input type='text' placeholder='Time in hours' /> <button>Hours</button>
        </div>
        <div className='input minutes'>
          <input type='text' placeholder='Time in minutes' /> <button>Minutes</button>
        </div>
        <button><Link to={`/tasks/${this.props.currentTask}`}>START WORKING</Link></button>
      </div>
      <Footer />
    </div>
  }
}
export default Main
