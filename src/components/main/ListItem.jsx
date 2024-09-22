import React from 'react'

const ListItem = ({children, className = ""}) => {
  return (
    <li className={`px-3 py-2 rounded-lg ${className}`}>{children}</li>
  )
}

export default ListItem