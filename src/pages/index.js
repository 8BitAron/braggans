import React, { Component } from 'react'

import Header from '../organisms/header/header'
import Body from '../organisms/body/body'
import Footer from '../organisms/footer/footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default App
