import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="flex flex-col gap-2">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/bt_logo/LOGO.png" alt="Batel Collection" className="h-10 w-auto object-contain mb-2" />
                        <p className="text-sm text-muted-foreground">
                            Elegant accessories for the modern woman.
                        </p>
                        <p className="text-sm font-medium mt-2">Kigali, Rwanda</p>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold">Shop</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/shop" className="hover:text-primary">All Products</Link></li>
                            <li><Link href="/shop?category=clothes" className="hover:text-primary">Clothes</Link></li>
                            <li><Link href="/shop?category=shoes" className="hover:text-primary">Shoes</Link></li>
                            <li><Link href="/shop?category=accessories" className="hover:text-primary">Accessories</Link></li>
                            <li><Link href="/shop?category=in-store" className="hover:text-primary">In Store</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                            <li><Link href="/terms" className="hover:text-primary">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm font-semibold">Contact</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Email: batelCollection@gmail.com</li>
                            <li>Phone: <a href="https://wa.me/250722439280" target="_blank" rel="noopener noreferrer" className="hover:text-primary">0722439280</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Batel Collection. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
