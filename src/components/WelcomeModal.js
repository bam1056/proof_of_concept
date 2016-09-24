import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class WelcomeModal extends Component {
  static propTypes = {
    setUser: React.PropTypes.func
  }

  constructor () {
    super()
    this.state = {
      userName: ''
    }
  }

  handleClick = (event) => {
    event.target.parentNode.className += ' hidden'
    event.target.style.display = 'none'
    const blurEl = document.querySelector('.blur')
    blurEl.className += ' off'
    window.fetch('https://sleepy-mountain-24094.herokuapp.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: {
          name: this.state.userName
        }
      })
    })
    .then(res => res.json())
    .then(data => {
      this.props.setUser(data.id, data.name)
      browserHistory.push('/work')
    })
  }

  setName = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  // getPassword = (event) => {
  //   this.props.getPass(event)
  // }

  render () {
    return <div className='modal welcome'>
      <h1>FREE TIME</h1>
      <input type='text' placeholder='Username' value={this.state.userName} onChange={this.setName} /><br />
      {/* <input type='text' placeholder='Password' onChange={this.getPassword} /><br /> */}
      <div className='go' onClick={this.handleClick}>GetStarted</div>
    </div>
  }
}
export default WelcomeModal
