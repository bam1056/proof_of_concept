import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Select, Button } from 'rebass'
import { Box } from 'reflexbox'
import { browserHistory, Link } from 'react-router'

class Main extends Component {
  static defaultProps = {
    currentTask: 'Task1'
  }

  static propTypes = {
    currentTask: React.PropTypes.string,
    user: React.PropTypes.object
  }

  componentWillMount () {
    if (!this.props.user.id) {
      browserHistory.push('/')
    }
  }

  render () {
    return <div className='main'>
      <Header />
      <h1>Ready to Work?</h1>
      <br />
      <div className='question'>
        <h3>How much</h3>
        <h2>FREE TIME</h2>
        <h3>do you have, {this.props.user.name}?</h3>
      </div>
      <div className='input-container'>
        <Select
          label='Free Time'
          message=''
          name='time free'
          options={[{children: '15m', value: 15}, {children: '30m', value: 30}, {children: '45m', value: 45}, {children: '1h', value: 60}, {children: '1h 30m', value: 90}, {children: '2h', value: 120}]}
          rounded
          backgroundColor='black'
        />
        <Box flexColumn flex col={12} align='center'>
          <Link to={`/tasks/${this.props.currentTask}`}>
            <Button theme='secondary' children='Tell Me What To Do' />
          </Link>
        </Box>
      </div>
      <Footer />
    </div>
  }
}
export default Main
