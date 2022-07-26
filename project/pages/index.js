import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

import Profile from '../components/Profile'

const HomeIndex = ({ profileData }) => {


  return (
    <>
      <Head>
        <title>Home page</title>
        <meta name='description' content='Homepage' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header/>
      
      <section className='relative py-60 bg-gray-600'>
        <div className='flex flex-wrap justify-center'>
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
          </div>
          <div className='flex flex-wrap justify-center'>
            <Link href='/profiles' passHref>
              <div className='py-6 px-3 mt-32 sm:mt-0'>
                <button
                  className='bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1'
                  type='button'
                  style={{ transition: 'all .15s ease' }}>
                  View profiles
                </button>
              </div>
            </Link>
          </div>
      </section>
    </>
  )
}

export default HomeIndex