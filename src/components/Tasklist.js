import React, { Component } from 'react'
import { Panel, PanelHeader, PanelFooter, Text } from 'rebass'
import Spinner from 'react-spinkit'
import Header from './Header'
import Footer from './Footer'

class Tasklist extends Component {
  constructor () {
    super()
    this.state = {
      tasks: []
    }
  }

  componentDidMount () {
    window.fetch(' https://sleepy-mountain-24094.herokuapp.com/tasks?user_id=2', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => this.setState({
      tasks: data
    }, () => console.log('Tasks', this.state.tasks))
  )
  }
  render () {
    const { tasks } = this.state
    let item
    switch (this.state) {
      case undefined: item = <Spinner spinnerName='circle' />
        break
      case null: item = <Spinner spinnerName='circle' />
        break
      default: item = tasks.map(task => {
        return <Panel theme='secondary' key={task.id}>
          <PanelHeader>{task.title}</PanelHeader>
          <Text>Task Description: {task.description}</Text>
          <PanelFooter>Estimated Time: {task.estimated_duration}min</PanelFooter>
        </Panel>
      })
    }
    return <div className='tasklist'>
      <Header />
      <h1> TASKS </h1>
      <div className='task-panels'>
        {item}
      </div>
      <Footer />
    </div>
  }
}
export default Tasklist
