import React, { Component } from 'react'
import Header from './Header'
import '../styles/screen.sass'

class App extends Component {
  startApp = (event) => {
    event.target.parentNode.className += ' hidden'
    event.target.style.display = 'none'
    const blurEl = document.querySelector('.blur')
    blurEl.className += ' off'
  }
  getName = (event) => {
    let name = event.target.value
    this.setState({userName: name})
  }
  getPassword = (event) => {
    let pass = event.target.value
    this.setState({password: pass})
  }
  render () {
    return <div className='app'>
      <div className='blur' />
      <Header />
      <div className='modal welcome'>
        <h1>FREE TIME</h1>
        <input type='text' placeholder='Username' onChange={this.getName} /><br />
        <input type='text' placeholder='Password' onChange={this.getPassword} /><br />
        <div className='go' onClick={this.startApp}>LOGIN</div>
      </div>
    </div>
  }
}
export default App
