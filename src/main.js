import React from 'react'
import { render } from 'react-dom'
import App from './MyApp'
import AppTitle from './AppTitle'

render(<App />, document.getElementById('reactinjectedhere'))
render(<AppTitle />, document.getElementById('lab1ex1'))

const generateArray = (n) => ( Array.from(Array(n+1).keys()).filter((x)=>(x>0)))

const generateRandomArray = (n) => (Array.from(Array(n).forEach((x)=>(x=1+Math.random%25))))

