import React from 'react'
import { render } from 'react-dom'
import App from './MyApp'
import AppTitle from './AppTitle'

render(<App />, document.getElementById('reactinjectedhere'))
render(<AppTitle />, document.getElementById('lab1ex1'))

const generateArray = (n) => (Array.from(Array(n).keys()))

