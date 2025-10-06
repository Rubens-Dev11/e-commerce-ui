import Link from 'next/link'
import React from 'react'
import Image from "next/image"

const Footer = () => {
    return (
        <div className='mt-16 flex flex-col gap-8 items-center md:justify-between md:gap-0 md:flex-row md:items-start bg-gray-800 rounded-lg p-8'>
            {/* first Box */}
            <div className='flex flex-col items-center gap-4 md:items-start'>
                <Link href="/" className='flex items-center'>
                    <Image
                        src="/logo.png"
                        alt='TrendTheodore'
                        width={36}
                        height={36}
                        className='w-6 h-6 md:w-9 md:h-9'
                    />
                    <p className='text-md font-medium tracking-wider  text-white'>TrendTheodore.</p>
                </Link>
                <p className='text-gray-400 text-sm'>© 2025TrendTheodore.</p>
                <p className='text-gray-400 text-sm'>All rights reserved.</p>
            </div>
            {/* SecondBox */}
            <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
                <p className='text-sm text-amber-50'>Links</p>
                <Link href="/">Homepage</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Terms of Service</Link>
                <Link href="/">Privacy Policy</Link>
                <Link href="/"></Link>
            </div>
            <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
                <p className='text-sm text-amber-50'>Links</p>
                <Link href="/">All Products</Link>
                <Link href="/">New Arrivals</Link>
                <Link href="/">Best Sellers</Link>
                <Link href="/">Sale</Link>
                <Link href="/"></Link>
            </div>
            <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start'>
                <p className='text-sm text-amber-50'>Links</p>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Blog</Link>
                <Link href="/">Affiliate Program</Link>
                <Link href="/"></Link>
            </div>
        </div>
    )
}

export default Footer
