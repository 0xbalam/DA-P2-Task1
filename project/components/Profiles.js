import { useState } from 'react'
import Profile from './Profile'
import LoadingSpinner from './LoadingSpinner'

const Profiles = ({ profilesData,onRefresh }) => {
    const [isLoading, setIsLoading] = useState(false)

    const RenderProfiles = () => {
        return (
            <div className='container mx-auto px-4 relative'>
                <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64 divide-y divide-gray-500'>
                    {profilesData.map((profileData, index) => (
                        <Profile key={index} profileData={profileData} isLoading={isLoading} onRefresh={onRefresh} onLoading={setIsLoading}></Profile>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <>
        { isLoading ? <LoadingSpinner /> : RenderProfiles() }
        </>
    )
}

export default Profiles