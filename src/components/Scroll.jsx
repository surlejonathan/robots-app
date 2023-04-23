import React from 'react'

const Scroll = ({ children }) => {
  var y = 'hello'
  console.log(y)
  return (
    <div
      style={{ height: '800px', paddingBottom: '50px' }}
      className="overflow-y-scroll ba bw3"
    >
      {children}
    </div>
  )
}

export default Scroll
