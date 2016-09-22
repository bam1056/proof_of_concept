import React, { Component } from 'react'
import { Panel, PanelHeader, PanelFooter, Text, ButtonCircle } from 'rebass'
import { Flex, Box } from 'reflexbox'
import Spinner from 'react-spinkit'
import Header from './Header'
import Footer from './Footer'
import Icon from 'react-geomicons'
import AddEditTaskModal from './AddEditTaskModal'

class Tasklist extends Component {
  constructor () {
    super()
    this.state = {
      tasks: [],
      overlay: false
    }
  }

  componentDidMount () {
    window.fetch('https://sleepy-mountain-24094.herokuapp.com/tasks?user_id=2', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => this.setState({
      tasks: data
    }, () => console.log('Tasks', this.state.tasks))
  )
  }

  deleteTask (id) {
    window.fetch(`https://sleepy-mountain-24094.herokuapp.com/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    let copyOfTaskList = this.state.tasks.slice()
    let newTaskList = copyOfTaskList.filter(task => task.id !== id)
    this.setState({ tasks: newTaskList })
  }

  toggleOverlay = (bool) => {
    this.setState({overlay: bool})
  }

  editTask = (task) => {
    this.setState({
      overlay: true,
      mode: 'edit',
      currentlyEditedTask: task })
  }

  addTask = () => {
    this.setState({
      overlay: true,
      mode: 'add'
    })
  }

  receiveTask = (task) => {
    console.log('RECEIVING NEW TASK', task)
    let copyOfTaskList = this.state.tasks.slice()
    copyOfTaskList.push(task)
    this.setState({ tasks: copyOfTaskList })
  }

  render () {
    const { tasks } = this.state
    let item
    switch (this.state) {
      case undefined: item = <Spinner
        spinnerName='circle' />
        break
      case null: item = <Spinner
        spinnerName='circle' />
        break
      default: item = tasks.map(task => {
        return <Panel
          theme='secondary'
          key={task.id}
          >
          <PanelHeader>
            <Flex
              align='center'
              justify='space-between'
              col={12}
              >
              {task.title}
              <Box
                col={3}
                flex
                justify='space-between'
                >
                <ButtonCircle
                  color='secondary'
                  backgroundColor='black'
                  onClick={() => this.editTask(task)}
                  >
                  <Icon name='compose' />
                </ButtonCircle>
                <ButtonCircle
                  color='secondary'
                  backgroundColor='black'
                  onClick={() => this.deleteTask(task.id)}
                  >
                  <Icon name='trash' />
                </ButtonCircle>
              </Box>
            </Flex>
          </PanelHeader>
          <Text>Task Description: {task.description}</Text>
          <PanelFooter>
            Estimated Time: {task.estimated_duration}min
          </PanelFooter>
        </Panel>
      })
    }
    return <div className='tasklist'>
      <Header />
      <Box
        flex
        align='center'
        justify='space-between'
        col={10}
        >
        <h1> TASKS </h1>
        <ButtonCircle
          onClick={() => this.addTask()}
          title='Add'
          style={{'marginTop': '30px'}}
          backgroundColor='black'
          >
          <Icon name='check' />
        </ButtonCircle>
      </Box>
      <div className='task-panels'>
        {item}
      </div>
      <Footer />
      <AddEditTaskModal
        task={this.state.currentlyEditedTask}
        overlay={this.state.overlay} toggleOverlay={this.toggleOverlay}
        mode={this.state.mode}
        sendTask={this.receiveTask}
        />
    </div>
  }
}
export default Tasklist
