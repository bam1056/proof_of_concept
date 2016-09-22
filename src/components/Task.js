import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class Task extends Component {
  constructor () {
    super()
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
      total: 0
    }
  }

  startTimer = () => {
    let endtime = Date.parse(new Date()) + 22500000
    console.log(endtime)
    this.getTimeRemaining(endtime)
    this.interval = setInterval(() => { this.getTimeRemaining(endtime) }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
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

  render () {
    const { days, hours, minutes, seconds } = this.state
    return <div className='task'>
      <Header />
      <div className='task-heading'>
        <h1 style={{'marginTop': '60px'}}>
        {this.props.params.currentTask}
        </h1>
      </div>
      <h3>"SOME TASK"</h3>
      <div className='clock'>
        <div>Days: {days}</div>
        <div>Hours: {hours}</div>
        <div>Minutes: {minutes}</div>
        <div>Seconds: {seconds}</div>
        <button onClick={this.startTimer}>Start Timer</button>
      </div>
      <Footer />
    </div>
  }
}
export default Task
