import React, { Component } from 'react'
import Header from './Header'
import WelcomeModal from './WelcomeModal'
import Footer from './Footer'
import '../styles/screen.sass'

class Home extends Component {

  render () {
    return <div className='app'>
      <div className='blur' />
      <Header />
      <WelcomeModal setUser={this.props.setUser} />
      <Footer />
    </div>
  }
}
export default Home
