"use client"
import { SubmitHandler, useForm } from "react-hook-form"
import React from 'react'
import { ShippingFormInputs, shippingFormSchema } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

const ShippingForm = ({ setShippingForm }: {setShippingForm: (data:ShippingFormInputs)=> void}) => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors },
    } = useForm<ShippingFormInputs>({
        resolver: zodResolver(shippingFormSchema),
    });

    const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
        setShippingForm(data)
        router.push("/cart?step=3", {scroll: false})
    }
    return <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleShippingForm)}>
        <div className="flex flex-col gap-1 ">
            <label htmlFor="name" className="text-xs text-gray-500 font-semibold">Name</label>
            <input className="border-b border-gray-200 py-2 outline-none text-sm"
                type="text"
                id="name"
                placeholder="john Doe"
                {...register("name")}
            />
            {errors.name && <p className="text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col gap-1 ">
            <label htmlFor="email" className="text-xs text-gray-500 font-semibold">Email </label>
            <input className="border-b border-gray-200 py-2 outline-none text-sm"
                type="text"
                id="name"
                placeholder="johndoe@gmail.com"
                {...register("email")}
            />
            {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
        </div>
        <div className="flex flex-col gap-1 ">
            <label htmlFor="phone" className="text-xs text-gray-500 font-semibold">Phone </label>
            <input className="border-b border-gray-200 py-2 outline-none text-sm"
                type="text"
                id="phone"
                placeholder="12345678"
                {...register("phone")}
            />
            {errors.phone && <p className="text-xs text-red-600">{errors.phone.message}</p>}
        </div>
        <div className="flex flex-col gap-1 ">
            <label htmlFor="phone" className="text-xs text-gray-500 font-semibold">Address</label>
            <input className="border-b border-gray-200 py-2 outline-none text-sm"
                type="text"
                id="address"
                placeholder="123 Main St, Anytown"
                {...register("address")}
            />
            {errors.address && <p className="text-xs text-red-600">{errors.address.message}</p>}
        </div>
        <div className="flex flex-col gap-1 ">
            <label htmlFor="phone" className="text-xs text-gray-500 font-semibold">City</label>
            <input className="border-b border-gray-200 py-2 outline-none text-sm"
                type="text"
                id="city"
                placeholder="New York"
                {...register("city")}
            />
            {errors.city && <p className="text-xs text-red-600">{errors.city.message}</p>}
        </div>

        <button onClick={() => router.push("/cart?step=2", { scroll: false })} className="w-full font-semibold cursor-pointer p-2 bg-gray-800 hover:bg-gray-900 transition-all duration-300 flex items-center gap-2 rounded-lg justify-center text-white">
            Continue
            <ArrowRight className="w-4 h-4" />
        </button>

    </form>
}

export default ShippingForm
