import Profile from './Profile'

const Profiles = ({ profilesData,onRefresh }) => {
    return (
        <div className='container mx-auto px-4 relative'>
            <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64 divide-y divide-gray-500'>
                {profilesData.map((profileData, index) => (
                    <Profile key={index} profileData={profileData} onRefresh={onRefresh}></Profile>
                ))}
            </div>
        </div>
    )
}

export default Profiles