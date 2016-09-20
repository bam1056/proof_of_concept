import React, { Component } from 'react'

class WelcomeModal extends Component {
  static propTypes = {
    start: React.PropTypes.func,
    getName: React.PropTypes.func,
    getPass: React.PropTypes.func
  }

  handleClick = (event) => {
    this.props.start(event)
  }

  getName = (event) => {
    this.props.getName(event)
  }

  getPassword = (event) => {
    this.props.getPass(event)
  }

  render () {
    return <div className='modal welcome'>
      <h1>FREE TIME</h1>
      <input type='text' placeholder='Username' onChange={this.getName} /><br />
      <input type='text' placeholder='Password' onChange={this.getPassword} /><br />
      <div className='go' onClick={this.handleClick}>LOGIN</div>
    </div>
  }
}
export default WelcomeModal
