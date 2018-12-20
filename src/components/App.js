import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../components/header/header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content>Comming Soon...</Content>
      </div>
    )
  }
}

export default App

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: calc(100vh - 85px);
  background-color: #ffffff;
`
