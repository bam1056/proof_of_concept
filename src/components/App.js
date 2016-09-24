import React, { Component } from 'react'

class App extends Component {
  static propTypes = {
    children: React.PropTypes.object
  }
  render () {
    return <div>
      {React.cloneElement(this.props.children, this.props)}
    </div>
  }
}
export default App
