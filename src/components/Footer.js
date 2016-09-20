import React, { Component } from 'react'
import { Breadcrumbs } from 'rebass'

class Footer extends Component {
  render () {
    return <div className='footer'>
      <Breadcrumbs links={[{children: 'Add Task', href: '#!'}, {children: 'Calendar', href: '#!'}, {children: 'Do Something Else', href: '#!'}]} />
      {/* <ul>
        <li>Add Event |</li>
        <li>View Calendar |</li>
        <li>Do something</li>
      </ul> */}
    </div>
  }
}
export default Footer
