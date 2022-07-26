import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const AddProfile = ({ profileData, error }) => {
    const [username, setUsername] = useState('')
    const [profession, setProfession] = useState('')
    const [blockchains, setBlockchains] = useState('')
    const [membership, setMembership] = useState('')
    const [summary, setSummary] = useState('')

    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!username) {
            alert('Please add a username')
            return
        }

        const data = JSON.stringify({
            username: e.target.username.value,
            profession: e.target.profession.value,
            blockchains: e.target.blockchains.value,
            membership: e.target.membership.value,
            summary: e.target.summary.value,
        })
        const endpoint = '/api/profile_data'
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: data
        }
        
        const response = await fetch(endpoint, options)
        const result = await response.json()
        console.log(result)
        if (!result.success) {
            alert('Profile already exists')
            return
        }

        router.push('/profiles')
    }

    return (
        <>
        <Head>
            <title>New Profile</title>
            <meta name='description' content='Add new profile' />
            <link rel='icon' href='/favicon.ico' />
        </Head>

        <Header></Header>

        <section className='relative py-60 bg-gray-600'>
            <div className='container mx-auto px-4'>
                <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64'>
                    <div className='px-6'>
                        <div className='text-left mt-1'>
                            <form onSubmit={useEffect( async() => onSubmit(), [])}>
                                <div className='relative w-full mb-3'>
                                    <label className='block uppercase text-gray-700 text-xs font-bold mb-2'
                                    htmlFor='username'>
                                        Username
                                    </label>
                                    <input type='text'
                                    id='username'
                                    name='username'
                                    className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                                    placeholder='Ex. 0xbalam'
                                    style={{ transition: 'all .15s ease' }}
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className='relative w-full mb-3'>
                                    <label className='block uppercase text-gray-700 text-xs font-bold mb-2'
                                    htmlFor='profession'>
                                        Profession
                                    </label>
                                    <input type='text'
                                    id='profession'
                                    name='profession'
                                    className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                                    placeholder='Ex. Developer, Community Moderator,...'
                                    style={{ transition: 'all .15s ease' }}
                                    value={profession}
                                    onChange={(e) => setProfession(e.target.value)} />
                                </div>
                                <div className='relative w-full mb-3'>
                                    <label className='block uppercase text-gray-700 text-xs font-bold mb-2'
                                    htmlFor='blockchains'>
                                        Blockchains
                                    </label>
                                    <input type='text'
                                    id='blockchains'
                                    name='blockchains'
                                    className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                                    placeholder='Ex. Solana, Ethereum, Near'
                                    style={{ transition: 'all .15s ease' }}
                                    value={blockchains}
                                    onChange={(e) => setBlockchains(e.target.value)} />
                                </div>
                                <div className='relative w-full mb-3'>
                                    <label className='block uppercase text-gray-700 text-xs font-bold mb-2'
                                    htmlFor='membership'>
                                        membership
                                    </label>
                                    <input type='text'
                                    id='membership'
                                    name='membership'
                                    className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                                    placeholder='Ex. Doge Capital, DeGods, FFF'
                                    style={{ transition: 'all .15s ease' }}
                                    value={membership}
                                    onChange={(e) => setMembership(e.target.value)} />
                                </div>
                                <div className='relative w-full mb-3'>
                                    <label className='block uppercase text-gray-700 text-xs font-bold mb-2'
                                    htmlFor='summary'>
                                        Summary
                                    </label>
                                    <input type='text'
                                    id='summary'
                                    name='summary'
                                    className='border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                                    placeholder='Ex. WAGMI'
                                    style={{ transition: 'all .15s ease' }}
                                    value={summary}
                                    onChange={(e) => setSummary(e.target.value)} />
                                </div>
                                <div className='flex flex-wrap justify-center'>
                                    <input type='submit'
                                    value='Submit'
                                    className='bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1'
                                    style={{ transition: 'all .15s ease' }} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>

    )
}

export default AddProfile