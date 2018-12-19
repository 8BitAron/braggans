import React, { Component } from 'react'
import styled from 'styled-components'

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Links>
          <Link href="https://github.com/8bitaron">GitHub</Link>
          <Link href="https://www.linkedin.com/in/aronbraggans/">Linkedin</Link>
        </Links>
        <Navbar>Coming Soon...</Navbar>
      </Wrapper>
    )
  }
}

const Wrapper = styled.header``

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-content: center;
  align-items: center;
  background-color: #222222;
  height: 25px;
`
const Link = styled.a`
  color: #f3f3f0;
  padding: 0px 10px 0px 0px;
  font-size: 14px;
  font-weight: 700;

  &:hover {
    color: #ffffff;
  }
`

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  background-color: #f3f3f0;
  height: 60px;
  font-size: 25px;
  font-weight: 700;
  padding: 0px 0px 0px 20px;
`
