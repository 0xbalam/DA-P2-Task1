import Head from 'next/head'
import Header from '../../components/Header'
import LoadingSpinner from '../../components/LoadingSpinner'
import Profiles from '../../components/Profiles'
import ProfileNotFound from '../../components/ProfileNotFound'
import { useEffect, useState } from 'react'
import { set } from 'mongoose'

const ProfilesIndex = () => {
  const [profilesData, setProfilesData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [needRefresh, setNeedRefresh] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    const fetchData = async () => {
      //const endpoint = 'https://da-p2-task1-six.vercel.app/api/profile_data'
      const endpoint = '/api/profile_data'
      const options = {
          method: 'GET'
      }
      const res = await fetch(endpoint, options)
      const data = await res.json()
      setProfilesData(data.data)
    }

    const res = fetchData().catch((error) => console.log(error))

    setIsLoading(false)
  }, [needRefresh])

  function renderProfileHomeIndex() {
    return (
      <>
      <section className='relative py-60 bg-gray-600'>
        <div className='flex flex-wrap justify-center'>
          { profilesData.length > 0 ? <Profiles profilesData={profilesData} setIsLoading={setIsLoading} setNeedRefresh={setNeedRefresh}/> : <ProfileNotFound/> }
        </div>
      </section>
      </>
    )
  }
  return (
    <>
        <Head>
        <title>Profiles</title>
        <meta name='description' content='Onboarded profiles' />
        <link rel='icon' href='/favicon.ico' />
        </Head>

        <Header/>

        <LoadingSpinner isActive={isLoading}/> 

        {renderProfileHomeIndex()}
    </>
  )
}

export default ProfilesIndex