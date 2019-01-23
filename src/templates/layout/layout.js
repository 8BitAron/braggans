import React from 'react'
import styled from 'styled-components'

import '@fortawesome/fontawesome-svg-core/styles.css'

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
  flex-direction: column;
  flex: 1;
  background-color: #ffffff;
  padding: 20px 20px 20px 20px;
  margin: 0 auto 0;
  min-height: calc(100vh - 105px);
  max-width: calc(100vw - 100px);
  > div {
    margin: 25px;
  }

  @media (min-width: 1023px) {
    flex-direction: row;
  }
`
