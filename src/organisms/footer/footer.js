import React, { PureComponent } from 'react'
import moment from 'moment'

import styled from 'styled-components'

class Footer extends PureComponent {
  render() {
    return <Foot>Copyright 1977-{moment().format('YYYY')}</Foot>
  }
}

export default Footer

const Foot = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 20px;
  background-color: #ffffff;
  font-size: 10px;
`
