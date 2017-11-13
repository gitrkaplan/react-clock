import React from 'react'
import ReactDOM from 'react-dom'

function Clock(props) {
  return <div>Time is currently {props.date.toLocaleTimeString()}.</div>
}

function tick() {
  ReactDOM.render(<Clock date={new Date()} />, document.querySelector('#app'))
}

setInterval(tick, 1000)
