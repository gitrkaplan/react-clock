import React from 'react'
import { render } from 'react-dom'

function Time(props) {
  return <div>The time is {props.date.toLocaleTimeString()}</div>
}

function tick() {
  render(<Time date={new Date()} />, document.querySelector('#app'))
}

setInterval(tick, 1000)
