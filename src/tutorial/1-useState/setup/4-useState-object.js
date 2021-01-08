import React, { useState } from 'react'

const UseStateObject = () => {
  const [people, setPeople] = useState({
    namely: 'jerry',

    tail: 'nine',
    anole: 6699,
  })

  const DisplayName = () => setPeople({ ...people, anole: 555 })
  return (
    <>
      <h2>{people.namely}</h2>
      <h2>{people.tail}</h2>
      <h2>{people.anole}</h2>
      <button className='btn' onClick={DisplayName}>
        Change the result
      </button>
    </>
  )
}

export default UseStateObject
