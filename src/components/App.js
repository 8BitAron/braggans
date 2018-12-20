import React, { Component } from 'react'
import styled from 'styled-components'

import Header from '../components/header/header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faGithubSquare, faLinkedin)

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
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
