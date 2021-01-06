import React, { useState } from 'react'

// using states to create a state trnasfer of an object
const UseStateBasics = () => {
  const [text, setText] = useState('Available')

  //  settext: usestate : set The usestate
  const handleClick = () => {
    if (text === 'Available') {
      setText('Not Available')
    } else {
      setText('Available')
    }
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        checking
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
