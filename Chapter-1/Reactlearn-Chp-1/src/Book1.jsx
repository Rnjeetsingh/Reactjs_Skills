import React from 'react'
import './Book1.css'

const Book1 = (props) => {
    const {image,title,year,country} = props;
  
  return (
    <div className='container'>
    <div className='book-img'><img src={image}/></div>
    <div className='book-det'><h2>{title}</h2>
    <p>{year}</p>
    <h3>{country}</h3>
    <button>Add To Cart</button></div> 
    </div>
  )
}

export default Book1
