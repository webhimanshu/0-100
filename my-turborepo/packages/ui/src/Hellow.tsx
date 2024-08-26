import React from 'react'

const Hellow = ({text }: {text?: string}) => {
  return (
    <div>{text || "Hwllo World"}</div>
  )
}

export default Hellow
