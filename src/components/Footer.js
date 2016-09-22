import React, { Component } from 'react'
import { Breadcrumbs } from 'rebass'

class Footer extends Component {
  render () {
    return <div className='footer'>
      <Breadcrumbs links={[{children: 'Add Task', href: '/tasks'}, {children: 'Calendar', href: '/calendar'}, {children: 'Do Something Else', href: '#!'}]} />
    </div>
  }
}
export default Footer
