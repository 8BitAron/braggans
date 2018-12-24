import React, { Component } from 'react'
import styled from 'styled-components'
import Post from '../../molecules/post/post'

class Posts extends Component {
  state = {
    posts: [1, 2, 3, 4, 5, 6] // stub array
  }
  render() {
    return (
      <Postss>
        {this.state.posts.map(idx => {
          return <Post />
        })}
      </Postss>
    )
  }
}

export default Posts

const Postss = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
