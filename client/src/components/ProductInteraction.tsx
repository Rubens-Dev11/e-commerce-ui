"use client"
import useCartStore from '@/stores/cartStore';
import { ProductType } from '@/types'
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const ProductInteraction = ({ product, selectedSize, selectedColor }:
    { product: ProductType; selectedSize: string; selectedColor: string }) => {

        const pathname = usePathname();
        const router = useRouter();
        const searchParams = useSearchParams();
        
        const  [ quantity, setQuantity] = useState(1)

    const handleChangeType = (type: string, value: string)=>{
        const params = new URLSearchParams(searchParams.toString())
        params.set(type, value)
        router.push(`${pathname}?${params.toString()}`, { scroll: false })

    }

    const handlechangeQuantity = (type : "increment" | "decrement") =>{
        if(type === "increment"){
            setQuantity((prev)=> prev + 1)
        }else{
            if(quantity > 1){
                setQuantity((prev)=>prev-1)
            }
        }
    }
    const {addToCart} = useCartStore()
    const handleAddToCart = ()=>{
        addToCart({
            ...product,
            quantity,
            selectedSize,
            selectedColor
        })
        toast.success("Product Added to cart")
    }
    return (
        <div className='flex flex-col gap-4 mt-4'>
            {/* SIZE */}
            <div className='flex flex-col gap-2 text-sm'>
                <span className='text-gray-500'>Size</span>
                <div className='flex items-center gap-2'>
                    {product.sizes.map((size)=>(
                        <div  className={`cursor-pointer border  p-[2px] ${selectedSize === size ? "border-gray-600 border-2":"border-gray-300"}`} key={size}>
                            <div onClick={() => handleChangeType("size", size)} className={`w-6 flex justify-center items-center h-6 ${selectedSize === size ? "bg-black text-white":"bg-white text-black"}`}>{size.toUpperCase()}</div>
                        </div>
                    ))}
                </div>
            </div>
            {/* COLOR */}
            <div className='flex flex-col gap-2 text-sm'>
                <span className='text-gray-500'>Color</span>
                <div className='flex items-center gap-2'>
                    {product.colors.map((color) => (
                        <div className={`cursor-pointer border  p-[2px] ${selectedColor === color ? "border-gray-600 border-2" : "border-gray-300"}`} key={color}>
                            <div onClick={() => handleChangeType("color", color)} style={{backgroundColor: color}} className='w-6 h-6'/>
                        </div>
                    ))}
                </div>
            </div>
            {/* QUANTITY */}
            <div className='flex flex-col text-sm gap-2 '>
                <span className='text-gray-500'>Quantity</span>
                <div className='flex items-center gap-2'>
                    <button className='cursor-pointer border-1 border-gray-200 p-1' onClick={()=>handlechangeQuantity("decrement")}>
                        <Minus className='w-4 h-4'/>
                    </button>
                    <p>{quantity}</p>
                    <button className='cursor-pointer border-1 border-gray-200 p-1' onClick={()=>handlechangeQuantity("increment")}>
                        <Plus className='w-4 h-4' />
                    </button>
                </div>
            </div>
            {/* BUTTONS */}
            <div className='flex flex-col gap-2'>
                <button onClick={handleAddToCart} className='bg-gray-800 text-white px-4 py-2 rounded-md text-xs shadow-lg flex items-center justify-center gap-2 cursor-pointer'>
                    <Plus className='w-4 h-4'/>
                    Add to Cart
                </button>
                <button className='ring-1 ring-gray-400 shadow-lg text-gray-800 cursor-pointer text-xs px-4 py-2 rounded-md flex items-center justify-center gap-2'>
                    <ShoppingCart className='w-4 h-4'/>
                    By this Item

                </button>

            </div>
        </div>
    )
}

export default ProductInteraction
