import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class CalendarView extends Component {
  render () {
    return <div className='calendar'>
      <Header />
      <Footer />
    </div>
  }
}
export default CalendarView
