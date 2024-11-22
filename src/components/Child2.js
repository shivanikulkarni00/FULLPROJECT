import React from 'react'

export default function Child2(props) {
  if (props.p1 == "") { 
    throw new Error("Image is empty");
  }
  
  return (
    <img src={props.p1} alt="" className='img-fluid'/>
  )
}
