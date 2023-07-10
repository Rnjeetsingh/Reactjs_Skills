// import React from 'react'
// import { memo } from 'react'

// const Memosec = (props) => {
//     const {count} = props
//     console.log('SecMemo')
//   return (
//     <div>
//       <h1>MemoSecond {count}</h1>
//     </div>
//   )
// }

// export default memo(Memosec);

import React from 'react'
import {memo} from 'react'

const Memosec = () => {
  return (
    <div>
      {
        console.log('secMemo')
      }
    </div>
  )
}

export default memo(Memosec);

