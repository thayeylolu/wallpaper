import React from 'react'
import ReactDom from 'react-dom'

import './index.css'
// books array
const books = [
  {
    author: 'Cambolia Sensei',
    title: 'Alive',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/41ThX3SfAiL._AC_SY400_.jpg',
  },
  {
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
        const { author, img, title } = book
        return (<Book book = {book} />)
        
      })}
    </section>
  )
}

const Book = (props) => {
  //this technique puts all the attribs name into the props .
  // its a js technique. to minimse code writing

  const { title, img, author} = props.book
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
