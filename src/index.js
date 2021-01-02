import React from 'react'
import ReactDom from 'react-dom'

import './index.css'
//setup var
const author = "Brit Bennett"
const title = "Vanishing Half: A Novel"
const img = "https://images-na.ssl-images-amazon.com/images/I/41ThX3SfAiL._AC_SY400_.jpg"

function Books () {
  return (
    <div className = 'booklist'>
      <Book num = {15 + 44}>
        <p>Lorem ipsum dolor sit amet.</p>
      </Book>
      <Book name = "the desert"/>
      <Book inter = "22" />
      

    </div>
  )
}

const Book = (props, children) => {

  //this technique puts all the attribs name into the props .
  // its a js technique. to minimse code writing

  const {num, inter} = props
  return (
    <article className = 'book'>
      <img src ={img} alt = "Excuse the Beauty"/>
      
      <h2>{author.toUpperCase()}</h2>
      <h4>{title.toLowerCase()}</h4>
      <p>{num}</p>
      <p>{props.name}</p>
      <p>{inter}</p>
      {props.children}
    </article>
    );
}

ReactDom.render(<Books/>, document.getElementById('root'));


