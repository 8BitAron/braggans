import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Links>
          <Link href="https://twitter.com/8bitaron">
            <FontAwesomeIcon
              icon={['fab', 'twitter-square']}
              style={{ marginRight: 5 }}
            />
            Twitter
          </Link>
          <Link href="https://github.com/8bitaron">
            <FontAwesomeIcon
              icon={['fab', 'github-square']}
              style={{ marginRight: 5 }}
            />
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/aronbraggans/">
            <FontAwesomeIcon
              icon={['fab', 'linkedin']}
              style={{ marginRight: 5 }}
            />
            Linkedin
          </Link>
        </Links>
        <Navbar>
          <Purple>Live</Purple>
          <Black> > </Black>
          <Blue>Ride</Blue>
          <Black> > </Black>
          <Orange>Code</Orange>
        </Navbar>
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
    color: #080aef;
  }
  &:hover:first-child {
    color: #8a07bd;
  }
  &:hover:last-child {
    color: #f56407;
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

const Purple = styled.span`
  color: #8a07bd;
`
const Orange = styled.span`
  color: #f56407;
`
const Blue = styled.span`
  color: #080aef;
`
// const Gray = styled.span`
//   color: #f3f3f0;
// `
const Black = styled.span`
  color: #222222;
`
