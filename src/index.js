import React from 'react'
import ReactDom from 'react-dom'

import './index.css'
// books array
const books = [
  {
    id:1,
    author: 'Cambolia Sensei',
    title: 'Alive',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/41ThX3SfAiL._AC_SY400_.jpg',
  },
  {
    id:2,
    author: 'Brit Bennett',
    title: 'Vanishing Half: A Novel',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/41ThX3SfAiL._AC_SY400_.jpg',
  },
]

function Books() {
  return (
    <section className='booklist  '>
      {books.map((book) => {
        //const { author, img, title } = book
        return (<Book key = {book.id} {...book} />)
        
      })}
    </section>
  )
}

const Book = ({ title, img, author}) => {
  //this technique puts all the attribs name into the props .
  // its a js technique. to minimse code writing

//  const { title, img, author} = prop
  return (
    <article className='book'>
      <div className='book'>
        <h1>{title}</h1>
        <img src={img} alt='Excuse the beauty' />
        <h3>{author}</h3>
      </div>
    </article>
  )
}

ReactDom.render(<Books />, document.getElementById('root'))
