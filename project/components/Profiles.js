import { useState } from 'react'
import Profile from './Profile'
import LoadingSpinner from './LoadingSpinner'

const Profiles = ({ profilesData, setIsLoading, setNeedRefresh }) => {

    const RenderProfiles = () => {
        return (
            <div className='container mx-auto px-4 relative'>
                <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64 divide-y divide-gray-500'>
                    {profilesData.map((profileData, index) => (
                        <Profile key={index} profileData={profileData} setIsLoading={setIsLoading} setNeedRefresh={setNeedRefresh}></Profile>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <>
        {RenderProfiles()}
        </>
    )
}

export default Profiles