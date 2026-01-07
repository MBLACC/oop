"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { formatPrice, formatPriceRWF } from "@/lib/utils"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group" // If available, else generic HTML

export default function CheckoutPage() {
    const [step, setStep] = React.useState<"shipping" | "payment" | "confirmation">("shipping")
    // Use boolean loading state for specific operations
    const [isSimulatingProcessing, setIsSimulatingProcessing] = React.useState(false)

    // Payment Form State
    const [paymentMethod, setPaymentMethod] = React.useState<"momo" | "airtel">("momo")
    const [phoneNumber, setPhoneNumber] = React.useState("")

    const handleSubmitShipping = (e: React.FormEvent) => {
        e.preventDefault()
        setStep("payment")
    }

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSimulatingProcessing(true)

        // Simulate MOMO USSD Push
        setTimeout(() => {
            setIsSimulatingProcessing(false)
            setStep("confirmation")
        }, 3000)
    }

    if (step === "confirmation") {
        return (
            <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 className="h-10 w-10" />
                </div>
                <h1 className="mb-2 text-3xl font-bold">Order Confirmed!</h1>
                <p className="mb-8 max-w-md text-muted-foreground">
                    Thank you for your purchase. A payment request has been sent to your phone. Please check your device to authorize the transaction. You will receive an email confirmation shortly.
                </p>
                <Link href="/">
                    <Button size="lg">Continue Shopping</Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            <h1 className="mb-8 text-3xl font-bold">Checkout</h1>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Main Checkout Form */}
                <div className="lg:col-span-2">
                    {step === "shipping" && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Shipping Information</CardTitle>
                                <CardDescription>Enter your delivery details.</CardDescription>
                            </CardHeader>
                            <form onSubmit={handleSubmitShipping}>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                                            <Input id="firstName" required placeholder="Jane" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                                            <Input id="lastName" required placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="address" className="text-sm font-medium">Address</label>
                                        <Input id="address" required placeholder="KG 123 St" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="city" className="text-sm font-medium">City</label>
                                            <Input id="city" required placeholder="Kigali" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-medium">Contact Phone</label>
                                            <Input id="phone" required placeholder="078..." />
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button type="submit" className="w-full">Continue to Payment</Button>
                                </CardFooter>
                            </form>
                        </Card>
                    )}

                    {step === "payment" && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Payment Method</CardTitle>
                                <CardDescription>Select your mobile money provider.</CardDescription>
                            </CardHeader>
                            <form onSubmit={handlePayment}>
                                <CardContent className="space-y-6">
                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted" onClick={() => setPaymentMethod("momo")}>
                                            <input type="radio" id="momo" name="payment" value="momo" checked={paymentMethod === "momo"} onChange={() => setPaymentMethod("momo")} className="h-4 w-4" />
                                            <label htmlFor="momo" className="flex-1 font-medium cursor-pointer">MTN Mobile Money</label>
                                            <div className="h-8 w-12 bg-yellow-400 rounded flex items-center justify-center font-bold text-xs">MTN</div>
                                        </div>
                                        <div className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted" onClick={() => setPaymentMethod("airtel")}>
                                            <input type="radio" id="airtel" name="payment" value="airtel" checked={paymentMethod === "airtel"} onChange={() => setPaymentMethod("airtel")} className="h-4 w-4" />
                                            <label htmlFor="airtel" className="flex-1 font-medium cursor-pointer">Airtel Money</label>
                                            <div className="h-8 w-12 bg-red-600 text-white rounded flex items-center justify-center font-bold text-xs">Airtel</div>
                                        </div>
                                    </div>

                                    <div className="space-y-2 border-t pt-4">
                                        <label htmlFor="momoPhone" className="text-sm font-medium">
                                            Enter {paymentMethod === "momo" ? "MTN" : "Airtel"} Phone Number
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                            <Input
                                                id="momoPhone"
                                                required
                                                placeholder="078..."
                                                className="pl-10"
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                            />
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            You will receive a prompt on this number to approve the payment.
                                        </p>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button type="submit" className="w-full" disabled={isSimulatingProcessing}>
                                        {isSimulatingProcessing ? "Processing..." : "Pay Now"}
                                    </Button>
                                </CardFooter>
                            </form>
                        </Card>
                    )}
                </div>

                {/* Order Summary */}
                <div className="h-fit space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between text-sm">
                                <span>Subtotal</span>
                                <span>{formatPriceRWF(129.99 * 1285)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span>Shipping</span>
                                <span>{formatPriceRWF(10 * 1285)}</span>
                            </div>
                            <div className="border-t pt-4 flex justify-between font-bold">
                                <span>Total</span>
                                <div className="text-right">
                                    <div>{formatPriceRWF(139.99)}</div>
                                    <div className="text-xs text-muted-foreground underline decoration-dashed">
                                        ~ {formatPrice(139.99)}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        <p className="font-semibold mb-1">Need Help?</p>
                        <p>Contact us at:</p>
                        <p>📞 <a href="https://wa.me/250722439280" target="_blank" rel="noopener noreferrer" className="hover:underline">0722439280</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
