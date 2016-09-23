import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Select } from 'rebass'
import { Link } from 'react-router'

class Main extends Component {
  static defaultProps = {
    currentTask: 'Task1'
  }

  static propTypes = {
    currentTask: React.PropTypes.string
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
        <Select
          label='Free Time'
          message=''
          name='time free'
          options={[{children: '15m', value: 15}, {children: '30m', value: 30}, {children: '45m', value: 45}, {children: '1h', value: 60}, {children: '1h 30m', value: 90}, {children: '2h', value: 120}]}
          rounded
          backgroundColor='black'
        />
        <button><Link to={`/tasks/${this.props.currentTask}`}>START WORKING</Link></button>
      </div>
      <Footer />
    </div>
  }
}
export default Main
