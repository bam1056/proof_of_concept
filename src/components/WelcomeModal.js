import React, { Component } from 'react'

class WelcomeModal extends Component {
  static propTypes = {
    start: React.PropTypes.func,
    getName: React.PropTypes.func,
    getPass: React.PropTypes.func,
    name: React.PropTypes.string,
    setUser: React.PropTypes.func
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
          name: this.props.name
        }
      })
    })
    .then(res => res.json())
    .then(data => this.props.setUser(data.id, data.name))
  }

  getName = (event) => {
    this.props.getName(event)
  }

  // getPassword = (event) => {
  //   this.props.getPass(event)
  // }

  render () {
    return <div className='modal welcome'>
      <h1>FREE TIME</h1>
      <input type='text' placeholder='Username' onChange={this.getName} /><br />
      {/* <input type='text' placeholder='Password' onChange={this.getPassword} /><br /> */}
      <div className='go' onClick={this.handleClick}>GetStarted</div>
    </div>
  }
}
export default WelcomeModal
