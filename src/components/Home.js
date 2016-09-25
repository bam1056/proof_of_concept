import React, { Component } from 'react'
import WelcomeModal from './WelcomeModal'
import { browserHistory } from 'react-router'
import '../styles/screen.sass'

class Home extends Component {
  static propTypes = {
    setUser: React.PropTypes.func
  }

  componentWillMount () {
    if (window.sessionStorage.getItem('userId')) {
      this.props.setUser(window.sessionStorage.getItem('userId'), window.sessionStorage.getItem('userName'))
      browserHistory.push('/work')
    }
  }

  render () {
    return <div className='app'>
      <div className='blur' />
      <WelcomeModal setUser={this.props.setUser} />
    </div>
  }
}
export default Home
