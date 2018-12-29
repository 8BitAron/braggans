import React from 'react'
import styled from 'styled-components'

import Header from '../../organisms/header/header'

export default ({ children }) => (
  <Container>
    <Header />
    {children}
  </Container>
)

const Container = styled.div``
