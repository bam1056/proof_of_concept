import React, { Component } from 'react'
import cal from './calData.json'
import { Box } from 'reflexbox'

class Calendar extends Component {
  getEvents = (event) => {
    console.log(event.target)
  }
  render () {
    let months = cal.Calendar.months
    let monthCal = months.map((month, i) => {
      return <Box align='center' justify='center'>
        <p>{month.name} : {month.numDays}</p>
      </Box>
    })
    return <div className='calendar'>
      {monthCal}
      {/* <div className='calBG' /> */}
    </div>
  }
}
export default Calendar
