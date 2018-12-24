import React, { Component } from 'react'

import Headline from '../../atoms/headline/headline'
import Copy from '../../atoms/copy/copy'

/// TODO: This is really a media object or blurb for the post, chnage this componet needs to change its label
class Post extends Component {
  render() {
    return (
      <div>
        <Headline />
        <Copy />
      </div>
    )
  }
}

export default Post
