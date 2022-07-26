import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../../components/Header'

import Profiles from '../../components/Profiles'
import ProfileNotFound from '../../components/ProfileNotFound'

const ProfilesIndex = ({ profilesData, error }) => {
  const router = useRouter()

  const refreshProfiles = () => {
    router.replace(router.asPath);
  }

  if (error) {
    return <div>An error occured</div>
  }

  return (
    <>
        <Head>
        <title>Profiles</title>
        <meta name='description' content='Onboarded profiles' />
        <link rel='icon' href='/favicon.ico' />
        </Head>

        <Header/>

        <section className='relative py-60 bg-gray-600'>
            <div className='flex flex-wrap justify-center'>
                { profilesData.length > 0 ? <Profiles profilesData={profilesData}  onRefresh={refreshProfiles}/> : <ProfileNotFound/> }
            </div>
        </section>
    </>
  )
}

export async function getServerSideProps(context) {
  try {
    const endpoint = 'https://da-p2-task1-six.vercel.app/api/profile_data'
    //const endpoint = 'http://localhost:3000/api/profile_data'
    const options = {
        method: 'GET'
    }
    const response = await fetch(endpoint, options)
    const data = await response.json()
    const profilesData = data.data
    return { props: { profilesData }}
  } catch (error) {
    return { props: {profilesData: [] }, error }
  }
}

export default ProfilesIndex