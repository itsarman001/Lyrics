import React from 'react'

const BrandName = () => {
    const brandName_src = '//music.youtube.com/img/on_platform_logo_dark.svg'
  return (
    <div>
        <img src={brandName_src} className='w-40 md:w-36 lg:w-28' alt="Youtube Music" />
    </div>
  )
}

export default BrandName