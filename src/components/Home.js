import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import Header from './Header'
import WelcomeModal from './WelcomeModal'
import Footer from './Footer'
import Spinner from 'react-spinkit'
import '../styles/screen.sass'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      userName: '',
      password: '',
      userId: 0
    }
  }

  getName = (event) => {
    let name = event.target.value
    this.setState({userName: name})
  }

  setUser = (userId, userName) => {
    this.setState({userId, userName}, () => browserHistory.push('/work'))
  }
  // getPassword = (event) => {
  //   let pass = event.target.value
  //   this.setState({password: pass})
  // }

  render () {
    return <div className='app'>
      <div className='blur' />
      <Header />
      <WelcomeModal
        getName={this.getName}
        getPass={this.getPassword}
        name={this.state.userName}
        setUser={this.setUser}
        />
      <Spinner spinnerName='circle' />
      <Footer />
    </div>
  }
}
export default Home
