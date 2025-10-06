"use client"
import useCartStore from '@/stores/cartStore'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ShoppingCartIcon = () => {
    const {cart, hasHydrated} = useCartStore();
    if (!hasHydrated) return null ;
    return (
        <Link className='relative  flex' href="/cart">
            <ShoppingCart className='w-4 h-4 text-gray-600' />
            <span className='absolute bg-amber-400  rounded-full w-4 h-4 flex text-xs items-center -top-3 -right-3 justify-center'>{cart.reduce((acc, item)=> acc + item.quantity,0)}</span>

        </Link>
    )
}

export default ShoppingCartIcon
