import React from 'react'

const Paragraph = ({spanText, text}) => {
  return (
<p>
    <span className=' font-bold'>{spanText}</span>: {text}
  
</p>
  )
}

export default Paragraph
