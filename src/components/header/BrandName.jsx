import React from 'react'
import Youtube_Music from '../../assets/Youtube_Music_icon.svg'

function BrandName() {
  return (
    <div className='flex items-center gap-2'>
        <img className='w-7' src={Youtube_Music} alt="Youtube Music" />
        <span className='text-xl'>Music</span>
    </div>
  )
}

export default BrandName