import Link from 'next/link'
import '../styles/Home.module.css'

const NavBar = () => {
    return (
        <nav className="top-0 absolute z-50 w-full flex flex-wrap items-right  justify-end px-2 py-3 ">
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
        </nav>
    )
}

export default NavBar