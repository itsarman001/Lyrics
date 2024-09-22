import React from 'react'

const Title = ({label}) => {
  return (
    <h3 className='text-xl md:text-2xl lg:text-3xl font-medium uppercase transition '>{label}</h3>
  )
}

export default Title