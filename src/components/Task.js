import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Overlay, PanelHeader, Panel, Button, Input, Select, Textarea } from 'rebass'

class Task extends Component {
  static propTypes = {
    open: React.PropTypes.bool,
    toggleOverlay: React.PropTypes.func
  }
  render () {
    return <div className='task'>
      <Header />
      <h1 style={{'marginTop': '60px'}}> Current Task </h1>
      <h3>"SOME TASK"</h3>
      <div className='task-modal'>
        <Overlay open={this.props.open} dark>
          <Panel theme='secondary'>
            <PanelHeader>TASK</PanelHeader>
            <Input placeholder='Task Name' />
            <Textarea placeholder='Description' />
            <Select
              label='Select'
              message='Estimated Time for Task'
              name='select_example'
              options={[{children: '15m', value: 0.25}, {children: '30m', value: 0.5}, {children: '45m', value: 0.75}, {children: '1h', value: 1.0}, {children: '1h 30m', value: 1.5}, {children: '2h', value: 2.0}]}
              rounded
            />
            <Button onClick={() => this.props.toggleOverlay(false)}>CLOSE</Button>
          </Panel>
        </Overlay>
      </div>
      <Footer />
    </div>
  }
}
export default Task
