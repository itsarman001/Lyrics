import React from 'react'
import Card from './index'

const UserProfile = ({user}) => {
  return (
    <section className='w-full h-full px-4 py-2 md:px-8 md:py-4 lg:px-16 lg:py-8 flex flex-col items-center'>
        <div className='w-full flex flex-col items-center justify-start'>
            <div className='w-full h-full flex flex-col items-center justify-start'>
                <img src={user.profileImage} alt={user.name} />
            </div>
            <div>
                <h1 className='text-2xl font-bold'>{user.name}</h1>
                <div>
                    <p>{user.followers} followers</p>
                </div>
                <div>
                    <h3 className='text-2xl font-bold'>Top Tracks</h3>
                    <ul>
                        {user.topTracks.map((track) => (
                            <li className='flex items-center justify-start gap-2' key={track.id}>
                                <img className='w-10 h-10' src={track.image} alt={track.name} />
                                <p>{track.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className='text-2xl font-bold'>Play Lists</h3>
                    <ul>
                        {user.playLists.map((playList) => (
                            <li className='flex items-center justify-start gap-2' key={playList.id}>
                               <Card />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='w-full flex items-center justify-center'>
                <button className='bg-highlight text-white px-4 py-2 rounded-lg'>Sign Out</button>
            </div>
        </div>
    </section>
  )
}

export default UserProfile