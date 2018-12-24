import React, { Component } from 'react'
import styled from 'styled-components'

import Posts from '../posts/posts'

class Body extends Component {
  render() {
    return (
      <Content>
        <Posts />
      </Content>
    )
  }
}

export default Body

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: calc(100vh - 105px);
  background-color: #ffffff;
  padding: 20px 20px 20px 20px;
`
