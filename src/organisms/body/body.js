import React, { Component } from 'react'
import styled from 'styled-components'

class Body extends Component {
  render() {
    return <Content>Coming soon...</Content>
  }
}

export default Body

const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-content: center;
  height: calc(100vh - 105px);
  background-color: #ffffff;
  padding: 20px 20px 20px 20px;
`
