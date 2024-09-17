import React from 'react'
import { useUserContext } from '../../context/UserContext'


function MobileNav() {
    const { NAVIGATION_LINKS } = useUserContext()
    
  return (
    <div className='absolute bottom-0 left-0 w-full bg-white z-10 md:hidden'>
        <ul className="flex items-center justify-between">
            {NAVIGATION_LINKS.map((link) => (
                <li key={link.name} className='flex flex-col items-center gap-1 p-2 cursor-pointer hover:bg-gray-100 rounded-md w-full'>
                    <span className='text-lg'>{link.icon}</span>
                    <span className='text-base'>{link.name}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default MobileNav