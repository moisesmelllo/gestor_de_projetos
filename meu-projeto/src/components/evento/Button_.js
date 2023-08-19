import React from 'react'

function button(props) {
  return (
    <>
      <button onClick={props.event}>{props.name}</button>
    </>
  )
}

export default button