import React, { Component } from 'react'
import Header from './Header'
import '../styles/screen.sass'

class App extends Component {
  startApp = (event) => {
    console.log(event.target.parentNode)
    event.target.parentNode.className += ' hidden'
  }
  render () {
    return <div className='app'>
      <Header />
      <div className='modal welcome'>
        <h1>FREE TIME</h1>
        <p>The App that tells <span>YOU</span> what to <span>DO</span></p><br /><br />
        <div className='go' onClick={this.startApp}>FREE UP YOUR TIME</div>
      </div>
    </div>
  }
}

export default App
