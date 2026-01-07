
"use client"

import Link from "next/link"
import { Minus, Plus, Trash2, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { formatPrice } from "@/lib/utils"
// In a real app, this would come from a Context/Store (Zustand/Redux)
import { products } from "@/lib/data" // Importing for mock data

export default function CartPage() {
    // Mock cart items based on product data
    const cartItems = [
        { ...products[0], quantity: 1 },
        { ...products[4], quantity: 2 },
    ]

    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    )
    const shipping = 10.0
    const total = subtotal + shipping

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Cart Items List */}
                <div className="lg:col-span-2 space-y-4">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex gap-4 p-4 border rounded-lg bg-card"
                        >
                            <div className="relative h-24 w-24 bg-muted rounded overflow-hidden flex-shrink-0">
                                {/* Optimization: Use Next/Image in real implementation */}
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="object-cover h-full w-full"
                                />
                            </div>

                            <div className="flex flex-1 flex-col justify-between">
                                <div className="flex justify-between">
                                    <div>
                                        <h3 className="font-semibold">{item.name}</h3>
                                        <p className="text-sm text-muted-foreground capitalize">
                                            {item.category}
                                        </p>
                                    </div>
                                    <p className="font-bold">{formatPrice(item.price)}</p>
                                </div>

                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center border rounded-md">
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <Minus className="h-3 w-3" />
                                        </Button>
                                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <Plus className="h-3 w-3" />
                                        </Button>
                                    </div>
                                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                                        <Trash2 className="h-4 w-4 mr-1" /> Remove
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="border rounded-lg p-6 bg-muted/20 sticky top-24">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span>{formatPrice(subtotal)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Shipping</span>
                                <span>{formatPrice(shipping)}</span>
                            </div>
                        </div>

                        <div className="border-t pt-4 mb-6">
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span>{formatPrice(total)}</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                                Including taxes
                            </p>
                        </div>

                        <Link href="/checkout" className="w-full">
                            <Button className="w-full" size="lg">
                                Proceed to Checkout <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="/shop" className="w-full block mt-2 text-center">
                            <Button variant="link" size="sm">Continue Shopping</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
