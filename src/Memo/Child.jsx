import React from 'react'

function Child() {
  return (
    <div>Child Component</div>
  )
}

export  {Child}

let memo=React.memo(Child)

export default memo