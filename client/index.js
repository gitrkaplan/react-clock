import React from 'react'
import { render } from 'react-dom'

const tick = () => {
  const time = <div>The time is {new Date().toLocaleTimeString()}.</div>
  render(time, document.querySelector('#app'))
}

setInterval(tick, 1000)
