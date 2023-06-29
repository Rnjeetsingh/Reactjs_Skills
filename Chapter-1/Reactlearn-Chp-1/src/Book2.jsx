import React from 'react';
import Book1 from './Book1';
import data from './data.json'


const Book2 = () => {

  return (
    <div>
    {
      data.map((el,i) => {
        return(
          <Book1  key={i}
          image={el.image}
          title={el.title}
          year={el.year}
          country={el.country}
          />
        )
      })
    }
    </div>
  )
}

export default Book2
