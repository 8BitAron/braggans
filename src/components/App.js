import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../components/header/header'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content>
          <Purple>Live</Purple>
          <Black> => </Black>
          <Blue>Ride</Blue>
          <Black> => </Black>
          <Orange>Work</Orange>
          <Black> => </Black>
          <Purple>Live</Purple>
        </Content>
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
const Purple = styled.span`
  color: #8a07bd;
  font-size: 50px;
`
const Orange = styled.span`
  color: #f56407;
  font-size: 50px;
`
const Blue = styled.span`
  color: #080aef;
  font-size: 50px;
`
// const Gray = styled.span`
//   color: #f3f3f0;
//   font-size: 50px;
// `
const Black = styled.span`
  color: #222222;
  font-size: 50px;
`
