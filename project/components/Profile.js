import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

const Profile = ({ profileData, onRefresh }) => {

  async function onDelete (usernameToDelete ) {
    try {
      const data = JSON.stringify({username: usernameToDelete})
      const endpoint = '/api/profile_data'
      const options = {
          method: 'DELETE',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
          body: data
      }
      const res = await fetch(endpoint, options)
      if (res.status == 204) {
        onRefresh()
      } else {
        alert('Failure. Try again.')
      }
    } catch (error) {
      return { error }
    }
  }

  return (
    <div className='px-6'>
      <div className='relative py-6 flex flex-wrap justify-center'>
        <Image className='rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16'
          width={152} height={152}
          src='/pfp.jpg'
          alt='PFP' />
      </div>
      <div className='text-center'>
        <h4 className='text-4xl font-semibold leading-normal text-gray-800'> {' '}
          {profileData.username}
        </h4>
        <div className='text-sm leading-normal text-gray-500 font-bold uppercase'>
          {profileData.profession}
        </div>
        <div className='text-gray-700'>
          <span className='font-normal text-pink-500'>Membership:</span>: {' '}
          {profileData.membership}
        </div>
        <div className='text-gray-700'>
          <span className='font-normal text-pink-500'>Blockchains</span>: {' '}
          {profileData.blockchains}
        </div>
        <div className='text-gray-800'>
          <span className='font-normal text-pink-500'>Summary</span>: {' '}
          {profileData.summary}
        </div>
        <div className='flex justify-center'>
          <Link href='/modify_profile' passHref>
            <div className='py-6 px-3 mt-32 sm:mt-0'>
              <button
                className='bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1'
                type='button'
                style={{ transition: 'all .15s ease' }} disabled>
                Modify profile
              </button>
            </div>
          </Link>
          <div className='py-6 px-3 mt-32 sm:mt-0'>
            <button
              className='bg-red-500 active:bg-red-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1'
              type='button'
              style={{ transition: 'all .15s ease' }}
              onClick={useEffect( async() => onDelete(profileData.username), [])}>
              Delete profile
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile