import React from 'react';
import logo from './logo.svg'

const POPOSSpace = ({name, image, address}) => {
  return (
    <div>
      <img src={logo} width="300px" height="300" alt="Hello" />
      <h1>{name}</h1>
      <div>{address}</div>
    </div>
  )
}

export default POPOSSpace;
