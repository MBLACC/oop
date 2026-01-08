"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, ShoppingCart, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-28 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/bt_logo/LOGO.png" alt="Batel Collection" className="h-24 w-auto object-contain drop-shadow-xl brightness-110 contrast-125 transition-transform hover:scale-105" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex md:items-center md:gap-6">
                    <Link
                        href="/"
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        Home
                    </Link>
                    <Link
                        href="/shop"
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        Shop
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm font-medium transition-colors hover:text-primary"
                    >
                        Contact
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/cart">
                        <Button variant="ghost" size="icon" className="relative">
                            <ShoppingCart className="h-5 w-5" />
                            <span className="sr-only">Cart</span>
                            {/* Future: Add cart badge here */}
                        </Button>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="container md:hidden border-t p-4">
                    <div className="flex flex-col space-y-4">
                        <Link
                            href="/"
                            className="text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/shop"
                            className="text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            Shop
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
