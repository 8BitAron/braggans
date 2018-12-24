import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './pages/index'

import * as serviceWorker from './serviceWorker'

//TODO: Move To an init file
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons'
library.add(faGithubSquare, faLinkedin, faTwitterSquare)

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
