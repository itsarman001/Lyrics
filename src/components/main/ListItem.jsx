import React from 'react'

const ListItem = ({children, className = "",}) => {
  return (
    <span className={`px-3 py-2 rounded-lg ${className}`}>{children}</span>
  )
}

export default ListItem