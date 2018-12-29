import React from 'react'
import styled from 'styled-components'

import '@fortawesome/fontawesome/styles.css'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import Header from '../../organisms/header/header'
import Footer from '../../organisms/footer/footer'
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(faGithubSquare, faLinkedin, faTwitterSquare)

export default ({ children }) => (
  <Container>
    <Header />
    <Body>{children}</Body>
    <Footer />
  </Container>
)

const Container = styled.div``

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: calc(100vh - 105px);
  background-color: #ffffff;
  padding: 20px 20px 20px 20px;
`
