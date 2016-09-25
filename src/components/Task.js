import React, { Component } from 'react'

class Task extends Component {
  constructor () {
    super()
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
      total: 0,
      clockTime: 0
    }
  }
  static propTypes = {
    params: React.PropTypes.object
  }

  startTimer = (e) => {
    e.target.disabled = true
    let endtime = Date.parse(new Date()) + 22500000
    this.getTimeRemaining(endtime)
    this.interval = setInterval(() => { this.getTimeRemaining(endtime) }, 1000)
    this.setState({ clockTime: endtime })
  }

  stopTimer = (e) => {
    e.persist()
    e.target.parentElement.childNodes[1].disabled = false
    clearInterval(this.interval)
  }

  // pauseTimer = (e) => {
  //   e.persist()
  //   clearInterval(this.interval)
  //   if (this.state.paused) {
  //     this.setState({ paused: false }, () => {
  //       e.target.innerHTML = 'Pause Timer'
  //       this.interval = setInterval(() => {
  //         this.getTimeRemaining(this.state.pauseTime)
  //       }, 1000)
  //     })
  //   } else {
  //     this.setState({ paused: true }, () => {
  //       e.target.innerHTML = 'Unpause Timer'
  //       let pauseTime = Date.parse(this.state.clockTime - new Date())
  //       this.setState({ pauseTime: pauseTime })
  //     })
  //   }
  // }

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
    const { hours, minutes, seconds } = this.state
    return <div className='task'>
      <div className='task-heading'>
        <h1 style={{'marginTop': '60px'}}>
        {this.props.params.currentTask}
        </h1>
      </div>
      <h3>"SOME TASK"</h3>
      <div className='clock'>
        <div>{hours}:{minutes}:{seconds}</div>
        <button onClick={this.startTimer}>Start Timer</button>
        <button onClick={this.pauseTimer}>Pause Timer</button>
        <button onClick={this.stopTimer}>Stop Timer</button>
      </div>
    </div>
  }
}
export default Task
