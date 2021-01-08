import React, { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const DeleteItems = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    return setPeople(newPeople)
  }

  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h2>{name}</h2>
            <button onClick={() => DeleteItems(id)}>remove</button>
          </div>
        )
      })}
      <button className='btn' onClick={() => setPeople([])}>
        Clear
      </button>
    </>
  )
}

export default UseStateArray
