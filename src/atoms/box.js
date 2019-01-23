import React, { PureComponent } from 'react'
import styled from 'styled-components'
class Box extends PureComponent {
  render() {
    return this.props.filled === true ? <Ridden /> : <Day />
  }
}

export default Box

const Day = styled.div`
  height: 10px;
  width: 10px;
  border: solid 1px #222222;
`

const Ridden = styled.div`
  height: 10px;
  width: 10px;
  background-color: #f56407;
  border: solid 1px #f56407;
`
