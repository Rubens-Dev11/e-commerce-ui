import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SearchBar from './SearchBar'
import { Bell, Home, ShoppingCart } from 'lucide-react'
import ShoppingCartIcon from './ShoppingCartIcon'

const Navbar = () => {
    return (
        <nav className='w-full flex items-center justify-between border-gray-200 border-b pb-4'>
            {/* LEFT */}
            <Link href="/" className='flex items-center'>
                <Image
                    src="/logo.png"
                    alt='TrendTheodore'
                    width={36}
                    height={36}
                    className='w-6 h-6 md:w-9 md:h-9'
                />
                <p className='text-md font-medium tracking-wider hidden md:block'>TrendTheodore.</p>
            </Link>
            {/* RIGHT */}
            <div className='flex items-center gap-6'>
                <SearchBar />
                <Link href="">
                    <Home className='w-4 h-4 text-gray-600' />
                </Link>
                <Bell className='w-4 h-4 text-gray-600' />
                <ShoppingCartIcon />
                <Link href="/login" className='text-sm'>
                    Sign-in
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
