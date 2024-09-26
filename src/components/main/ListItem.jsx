import React from 'react'

const ListItem = ({children, className = "", key}) => {
  return (
    <span key={key} className={`px-3 py-2 rounded-lg ${className}`}>{children}</span>
  )
}

export default ListItem