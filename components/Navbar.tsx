import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className='flex items-center flex-wrap'>
                <div className="container flex items-center justify-between">
                    <Link href='/'>
                        <p className='inline-flex items-center p-2 mr-4'>
                            <span className='text-xl text-white font-bold tracking-wide'>sundayish.</span>
                        </p>
                    </Link>
                    <div className="">
                        <ul className="flex md:flex-row md:space-x-8 md:text-lg md:font-bold ">
                            <li>
                                <Link href='/' className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white">Home</Link>
                            </li>
                            <li>
                                <Link href='/' className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white">Blog</Link>
                            </li>
                            <li>
                                <Link href='/' className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:text-white md:p-0 dark:text-white">Journal</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}