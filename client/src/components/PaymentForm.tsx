"use client"
import { SubmitHandler, useForm } from "react-hook-form"
import React from 'react'
import {  PaymentFormInputs, PaymentFormSchema,  } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"

const PayemetForm = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors },
    } = useForm<PaymentFormInputs>({
        resolver: zodResolver(PaymentFormSchema),
    });

    const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {
        
        router.push("/cart?step=3", {scroll: false})
    }
    return <form className="flex flex-col gap-4" onSubmit={handleSubmit(handlePaymentForm)}>
        <div className="flex flex-col gap-1 ">
            <label htmlFor="name" className="text-xs text-gray-500 font-semibold">Name on card</label>
            <input className="border-b border-gray-200 py-2 outline-none text-sm"
                type="text"
                id="cardHolder"
                placeholder="john Doe"
                {...register("cardHolder")}
            />
            {errors.cardHolder && <p className="text-xs text-red-600">{errors.cardHolder.message}</p>}
        </div>
        <div className="flex flex-col gap-1 ">
            <label htmlFor="email" className="text-xs text-gray-500 font-semibold">Card Number </label>
            <input className="border-b border-gray-200 py-2 outline-none text-sm"
                type="text"
                id="cardNumber"
                placeholder="1234567891234567"
                {...register("cardNumber")}
            />
            {errors.cardNumber && <p className="text-xs text-red-600">{errors.cardNumber.message}</p>}
        </div>
        <div className="flex flex-col gap-1 ">
            <label htmlFor="expirationDate" className="text-xs text-gray-500 font-semibold">Expiration date </label>
            <input className="border-b border-gray-200 py-2 outline-none text-sm"
                type="text"
                id="expirationDate"
                placeholder="01/32"
                {...register("expirationDate")}
            />
            {errors.expirationDate && <p className="text-xs text-red-600">{errors.expirationDate.message}</p>}
        </div>
        <div className="flex flex-col gap-1 ">
            <label htmlFor="phone" className="text-xs text-gray-500 font-semibold">CVV</label>
            <input className="border-b border-gray-200 py-2 outline-none text-sm"
                type="text"
                id="cvv"
                placeholder="123 Main St, Anytown"
                {...register("cvv")}
            />
            {errors.cvv && <p className="text-xs text-red-600">{errors.cvv.message}</p>}
        </div>
        <div className="flex items-center gap-2 mt-4">
            <Image src="/klarna.png" alt="klarma" width={50} height={25} className="rounded-md"/>
            <Image src="/cards.png" alt="cards" width={50} height={25} className="rounded-md" />
            <Image src="/stripe.png" alt="stripe" width={50} height={25} className="rounded-md" />
        </div>
        <button onClick={() => router.push("/cart?step=2", { scroll: false })} className="w-full font-semibold cursor-pointer p-2 bg-gray-800 hover:bg-gray-900 transition-all duration-300 flex items-center gap-2 rounded-lg justify-center text-white">
            Checkout
            <ShoppingCart className="w-4 h-4" />
        </button>

    </form>
}

export default PayemetForm
