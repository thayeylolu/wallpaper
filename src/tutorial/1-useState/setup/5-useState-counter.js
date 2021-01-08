import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  return (
    <>
      <section>
        <h2>useState counter example</h2>

        <h2>{value}</h2>
        <button className='btn' onClick = {() => setValue(0)}>Reset</button>
        <button className='btn' onClick = {() => setValue(value + 1)}>Increase</button>
        <button className='btn' onClick = {() => setValue(value - 1 )}>Decrease</button>
      </section>
    </>
  )
}

export default UseStateCounter
