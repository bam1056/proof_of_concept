import React, { Component } from 'react'
import Header from './Header'
import { Breadcrumbs } from 'rebass'
import FlexFoot from './FlexFoot'

class App extends Component {
  static propTypes = {
    children: React.PropTypes.object,
    user: React.PropTypes.object,
    setUser: React.PropTypes.func
  }
  render () {
    return <div className='root'>
      <Header user={this.props.user} setUser={this.props.setUser} />
      <div className='router-container'>
      {React.cloneElement(this.props.children, this.props)}
      </div>
      <FlexFoot
        backgroundColor='black'
        color='white'
        align='center'
        justify='center'
      >
        <Breadcrumbs links={[{children: 'Add Task', href: '/todolist'}, {children: 'Calendar', href: '/calendar'}, {children: 'Sign Out', href: '#!'}]} />
      </FlexFoot>
    </div>
  }
}
export default App
