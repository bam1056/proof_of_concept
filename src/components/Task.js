import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Overlay, PanelHeader, Panel, Button, Input, Select, Textarea, ButtonCircle } from 'rebass'
import Icon from 'react-geomicons'

class Task extends Component {
  constructor () {
    super()
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
      total: 0,
      overlay: false,
      title: '',
      description: '',
      estimated_duration: 0,
      user_id: 2
    }
  }

  static propTypes = {
    open: React.PropTypes.bool,
    toggleOverlay: React.PropTypes.func
  }

  toggleOverlay = (bool) => {
    this.setState({overlay: bool})
  }

  handleClick = () => {
    let duration = document.querySelector("select[name='duration']")
    console.log("SELECT", duration.value)
    this.setState({
      estimated_duration: duration.value
    }, () => this.addTask())
    this.toggleOverlay(false)
  }

  addTask = () => {
    const { title, description, user_id, estimated_duration } = this.state
    console.log("ADD TASK", title, description, user_id, estimated_duration)
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
    .then(data => console.log(JSON.stringify(data)))
  }

  componentDidMount () {
    let endtime = Date.parse(new Date()) + 2500000
    console.log(endtime)
    this.getTimeRemaining(endtime)
    setInterval(() => { this.getTimeRemaining(endtime) }, 1000)
  }

  getTimeRemaining = (endtime) => {
    let t = endtime - Date.parse(new Date())
    var seconds = Math.floor((t / 1000) % 60)
    var minutes = Math.floor((t / 1000 / 60) % 60)
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24)
    var days = Math.floor(t / (1000 * 60 * 60 * 24))
    this.setState({
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    })
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

  render () {
    const { days, hours, minutes, seconds } = this.state
    return <div className='task'>
      <Header />
      <div className='task-heading'>
        <h1 style={{'marginTop': '60px'}}>
        {this.props.params.currentTask}
        </h1>
        <ButtonCircle
          onClick={() => this.toggleOverlay(true)} title='Add'>
          <Icon name='check' />
        </ButtonCircle>
      </div>

      <h3>"SOME TASK"</h3>
      <div className='clock'>
        <div>Days: {days}</div>
        <div>Hours: {hours}</div>
        <div>Minutes: {minutes}</div>
        <div>Seconds: {seconds}</div>
      </div>
      <div className='task-modal'>
        <Overlay open={this.state.overlay} dark>
          <Panel theme='secondary'>
            <PanelHeader>TASK</PanelHeader>
            <Input placeholder='Title' onChange={this.getTitle} />
            <Textarea placeholder='Description' onChange={this.getDescription} />
            <Select
              label='Select'
              message='Estimated Time for Task'
              name='duration'
              options={[{children: '15m', value: 0.25}, {children: '30m', value: 0.5}, {children: '45m', value: 0.75}, {children: '1h', value: 1.0}, {children: '1h 30m', value: 1.5}, {children: '2h', value: 2.0}]}
              rounded
            />
            <Button onClick={this.handleClick}>ENTER TASK</Button>
          </Panel>
        </Overlay>
      </div>
      <Footer />
    </div>
  }
}
export default Task
