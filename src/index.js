// Dependencies
import React from 'react'
import ReactDOM from 'react-dom'

/**
import { Provider } from 'react-redux'
*/

// Functions

/**
*
import store from './store'
*/

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.scss'

// Components
/**
*
import Routes from './routes'
*/

import Header from './components/header'

const App = () => (
  <Header />
)

ReactDOM.render(<App />, document.getElementById('app'))
