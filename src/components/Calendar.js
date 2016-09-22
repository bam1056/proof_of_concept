import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class Calendar extends Component {
  render () {
    return <div className='calendar'>
      <Header />
      <div className='calBG' />
      <Footer />
    </div>
  }
}
export default Calendar
