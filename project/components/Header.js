import Image from 'next/image'
import '../styles/Home.module.css'
const Header = () => {
    return (

        <section className="relative block" style={{ height: "200px" }}>
            <div className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
            backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
            }}>
                <div className="flex flex-wrap justify-center">
                    <span>
                        <Image src="/doge_capital_logo.png" width={300} height={125}/>
                    </span>
                </div>
                <div className="flex flex-wrap justify-center text-5xl uppercase text-white font-bold italic">
                    ACADEMY
                </div>
            </div>
        </section>
    )
}

export default Header