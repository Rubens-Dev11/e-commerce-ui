"use client";

import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import { cartItemsType, ShippingFormInputs } from "@/types";
import { ArrowRight, Trash2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import Image from "next/image";
import useCartStore from "@/stores/cartStore";

const steps = [
    { id: 1, title: "Shopping Cart" },
    { id: 2, title: "Shipping Address" },
    { id: 3, title: "Payment Method" },
];

function CartContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const activeStep = parseInt(searchParams.get("step") || "1");

    const { cart, removeFromCart } = useCartStore();
    const [shipping, setShippingForm] = useState<ShippingFormInputs>();

    return (
        <div className="flex flex-col gap-8 items-center mt-12 justify-center">
            {/* TITLE */}
            <h1 className="text-2xl font-medium">Your Shopping Cart</h1>

            {/* STEPS */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className={`flex items-center gap-2 border-b-2 pb-4 ${step.id === activeStep
                                ? "border-gray-800"
                                : "border-gray-400"
                            }`}
                    >
                        <div
                            className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${step.id === activeStep ? "bg-gray-800" : "bg-gray-400"
                                }`}
                        >
                            {step.id}
                        </div>
                        <p
                            className={`text-sm font-semibold ${step.id === activeStep
                                    ? "text-gray-800"
                                    : "text-gray-400"
                                }`}
                        >
                            {step.title}
                        </p>
                    </div>
                ))}
            </div>

            {/* STEP DETAILS */}
            <div className="w-full flex flex-col lg:flex-row gap-16">
                <div className="w-full lg:w-7/12 shadow-lg border border-gray-100 p-8 rounded-lg flex flex-col gap-8">
                    {activeStep === 1 &&
                        cart.map((item) => (
                            <div
                                className="flex items-center justify-between"
                                key={item.id + item.selectedColor + item.selectedSize}
                            >
                                {/* IMAGE AND DETAILS */}
                                <div className="flex gap-8">
                                    <div className="relative w-32 h-32 bg-gray-50 rounded-lg">
                                        <Image
                                            src={item.images[item.selectedColor]}
                                            fill
                                            alt={item.name}
                                            className="object-contain"
                                        />
                                    </div>

                                    {/* ITEM DETAILS */}
                                    <div className="flex flex-col justify-between">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-sm font-semibold">{item.name}</p>
                                            <p className="text-xs text-gray-500">
                                                Quantity : {item.quantity}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                Size : {item.selectedSize.toUpperCase()}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                Color : {item.selectedColor}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default function CartPage() {
    return (
        <Suspense fallback={<p className="text-center mt-12">Loading cart...</p>}>
            <CartContent />
        </Suspense>
    );
}
