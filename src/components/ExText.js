import React from 'react'

export default function ExText( props,{children} ) {
  //return props.children.split("\n").map( ( text,i ) =><><Text>{text}<br/></Text></>)


  return (
    <>{
      props.children.split("\n").map( ( text,i ) =><Text key = {i}>{text}<br/></Text>)
      
      }</>
  )
}

function Text( props,{children} ) {
  return (
    <>{props.children}</>
  )
}
