import React, { Component } from 'react'

class App extends Component {
  static propTypes = {
    children: React.PropTypes.object
  }
  render () {
    return <div>
      {this.props.children && React.cloneElement(this.props.children)}
    </div>
  }
}
export default App
