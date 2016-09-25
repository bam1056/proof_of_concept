import React, { Component } from 'react'
import { Breadcrumbs } from 'rebass'
import FlexPar from './FlexFoot'

class Footer extends Component {
  render () {
    return <div className='footer'>
      <Breadcrumbs links={[{children: 'Add Task', href: '/todolist'}, {children: 'Calendar', href: '/calendar'}, {children: 'Do Something Else', href: '#!'}]} />
      <FlexPar flex align='center'
        justify='center'
        flexColumn>
          This is a thing with things
      </FlexPar>
    </div>
  }
}
export default Footer
