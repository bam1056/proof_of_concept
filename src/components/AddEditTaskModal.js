import React, { Component } from 'react'
import { Flex } from 'reflexbox'
import {
  Overlay,
  Panel,
  PanelHeader,
  Close,
  Input,
  Textarea,
  Select,
  Button
} from 'rebass'

class AddEditTaskModal extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      description: '',
      estimated_duration: 0,
      user_id: 2
    }
  }

  static propTypes = {
    toggleOverlay: React.PropTypes.func,
    mode: React.PropTypes.string,
    task: React.PropTypes.object,
    overlay: React.PropTypes.bool,
    sendTask: React.PropTypes.func
  }

  getTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  getDescription = (event) => {
    this.setState({
      description: event.target.value
    })
  }

  closeTaskModal = () => {
    this.props.toggleOverlay(false)
  }

  handleClick = () => {
    let duration = document.querySelector("select[name='duration']")
    console.log('SELECT', duration.value)
    this.setState({
      estimated_duration: duration.value
    }, () => this.addTask())
    this.props.toggleOverlay(false)
  }

  addTask = () => {
    const { title, description, user_id, estimated_duration } = this.state
    console.log('ADD TASK', title, description, user_id, estimated_duration)
    window.fetch(' https://sleepy-mountain-24094.herokuapp.com/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        description: description,
        user_id: user_id,
        estimated_duration: estimated_duration
      })
    })
    .then(res => res.json())
    .then(data => this.props.sendTask(data))
  }

  editTask = () => {
    console.log('EDITING TASK')
  }

  render () {
    let modal
    switch (this.props.mode) {
      case 'add': modal = (
        <div className='task-modal add'>
          <Overlay
            open={this.props.overlay}
            dark
            >
            <Panel theme='secondary'>
              <PanelHeader>
                <Flex
                  align='center'
                  justify='space-between'
                  col={12}
                  >
                  TASK
                  <Close onClick={this.closeTaskModal} />
                </Flex>
              </PanelHeader>
              <Input
                key='Title'
                placeholder='Title'
                label='Title'
                name='Title'
                onChange={this.getTitle}
                />
              <Textarea
                placeholder='Description'
                label='Description'
                name='Description'
                onChange={this.getDescription}
                />
              <Select
                label='Estimated Time for Task'
                message='Estimated Time for Task'
                name='duration'
                options={[{children: '15m', value: 15}, {children: '30m', value: 30}, {children: '45m', value: 45}, {children: '1h', value: 60}, {children: '1h 30m', value: 90}, {children: '2h', value: 120}]}
                rounded
              />
              <Button onClick={this.handleClick}>
                ENTER TASK
              </Button>
            </Panel>
          </Overlay>
        </div>
      )
        break
      case 'edit': modal = (
        <div className='task-modal edit'>
          <Overlay
            open={this.props.overlay}
            dark
            >
            <Panel theme='primary'>
              <PanelHeader>
                <Flex
                  align='center'
                  justify='space-between'
                  col={12}
                  >
                  TASK
                  <Close onClick={this.closeTaskModal} />
                </Flex>
              </PanelHeader>
              <Input
                key='Title'
                placeholder={this.props.task.title}
                label='Title'
                name='Title'
                onChange={this.getTitle}
                />
              <Textarea
                placeholder={this.props.task.description}
                label='Description'
                name='Description'
                onChange={this.getDescription}
                />
              <Select
                label='Estimated Time for Task'
                message='Estimated Time for Task'
                name='duration'
                options={[{children: '15m', value: 15}, {children: '30m', value: 30}, {children: '45m', value: 45}, {children: '1h', value: 60}, {children: '1h 30m', value: 90}, {children: '2h', value: 120}]}
                rounded
              />
              <Button onClick={this.editTask}>
                EDIT TASK
              </Button>
            </Panel>
          </Overlay>
        </div>
      )
        break
      default: modal = null
    }
    return <div>{modal}</div>
  }
}
export default AddEditTaskModal
