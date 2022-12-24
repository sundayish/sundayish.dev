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
                            <li>
                                <Link href='/'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.75 6C15.75 6.99456 15.3549 7.94839 14.6516 8.65165C13.9484 9.35491 12.9945 9.75 12 9.75C11.0054 9.75 10.0516 9.35491 9.34833 8.65165C8.64506 7.94839 8.24998 6.99456 8.24998 6C8.24998 5.00544 8.64506 4.05161 9.34833 3.34835C10.0516 2.64509 11.0054 2.25 12 2.25C12.9945 2.25 13.9484 2.64509 14.6516 3.34835C15.3549 4.05161 15.75 5.00544 15.75 6ZM4.50098 20.118C4.53311 18.1504 5.33731 16.2742 6.74015 14.894C8.14299 13.5139 10.0321 12.7405 12 12.7405C13.9679 12.7405 15.857 13.5139 17.2598 14.894C18.6626 16.2742 19.4668 18.1504 19.499 20.118C17.1464 21.1968 14.5881 21.7535 12 21.75C9.32398 21.75 6.78398 21.166 4.50098 20.118Z" fill="#FDFFFC"/>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}