import React, { Component } from 'react'
import Header from './Header'
import WelcomeModal from './WelcomeModal'
import Footer from './Footer'
import { browserHistory } from 'react-router'
import '../styles/screen.sass'

class Home extends Component {
  static propTypes = {
    setUser: React.PropTypes.func
  }

  componentWillMount () {
    if (window.sessionStorage.userId) {
      browserHistory.push('/work')
    }
  }

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
