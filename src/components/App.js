import React, { Component } from 'react'
import '../styles/screen.sass'

class App extends Component {

  render () {
    return <div className='app'>
      <div className='modal welcome'>
        <h2>Welcome to</h2>
        <h1>FREE TIME</h1>
        <p>The App that tells YOU what to do!</p><br /><br />
        <div className='go'>FREE UP YOUR TIME</div>
      </div>
    </div>
  }
}

export default App
