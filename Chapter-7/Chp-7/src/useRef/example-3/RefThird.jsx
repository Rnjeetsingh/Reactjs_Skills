// import React, { useEffect,useRef } from 'react'

// const RefThird = () => {
//     const data = useRef(null);

//     useEffect(() => {
//         data.current.focus();
//     },[])
//   return (
//     <div>
//       <input ref={data} type='text' placeholder='Enter Name'/>
//     </div>
//   )
// }

// export default RefThird


// Second Example 

import React,{useRef} from 'react'

const RefThird = () => {

    const data = useRef(null);
      
    const handlefocus = () => {
        data.current.style.backgroundColor = 'black'
    }
    const handleblur = () => {
        data.current.style.backgroundColor = 'red'
    }

  return (
    <div>
      <input ref={data} type='text' placeholder='Enter Name' onFocus={handlefocus}
      onBlur={handleblur}
      />
    </div>
  )
}

export default RefThird

