import Link from 'next/link'

const ProfileNotFound = () => {
    return (
        <>
            <p>
            Profiles not found. Try adding one.
            </p>
            <Link href='/add_profile' passHref>
                <div className='py-6 px-3 mt-32 sm:mt-0'>
                <button
                    className='bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1'
                    type='button'
                    style={{ transition: 'all .15s ease' }}>
                    Add profile
                </button>
                </div>
            </Link>
        </>
    )
}

export default ProfileNotFound