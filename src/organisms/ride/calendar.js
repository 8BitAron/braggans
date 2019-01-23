import React, { Component } from 'react'
import styled from 'styled-components'
import Box from '../../atoms/box'

class RideCalendar extends Component {
  render() {
    const days = 365
    const rides = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      19,
      20,
      21,
      22
    ]
    return (
      <div>
        Ride Calendar
        <Calendar>
          {[...Array(days).fill(null)].map((e, i) => {
            const n = i + 1
            return <Box key={n} filled={rides.includes(n) ? true : false} />
          })}
        </Calendar>
      </div>
    )
  }
}

export default RideCalendar

const Calendar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 250px;
  brorder: solid 1px green;
  > div {
    margin: 1px;
  }
`
