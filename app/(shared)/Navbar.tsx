import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <header className="mb-5">
            <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4">
                {/*<div className="hidden sm:block">
                    social media icons
                </div>*/}
                <div className='font-bold text-xl'>
                    aib
                </div>
                <div className='flex justify-between items-center gap-10'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>Trending</Link>
                    <Link href={'/'}>About</Link>
                </div>
            </nav>
            <div className='flex justify-between gap-8 mt-5 mb-4 mx-10'>
                <div className='basis-2/3 md:mt-3'>
                    <h1 className='font-bold text-3xl md:text-5xl'>BLOG OF THE FUTURE</h1>
                    <p className='text-sm mt-3'>A blog built with Next.js 13 and Tailwind CSS that uses the OpenAI API to generate content.</p>
                </div>
                <div className='basis-full relative w-auto h-34 bg-amber-200'>
                    Image here
                </div>
            </div>
            <hr className='mx-10' />
        </header>
    )
}

export default Navbar
