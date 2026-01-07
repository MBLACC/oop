"use client"

import * as React from "react"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Check, Instagram, MessageCircle, Minus, Plus, Share2, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { products } from "@/lib/data"
import { formatPrice, formatPriceRWF, cn } from "@/lib/utils"
import { ProductCard } from "@/components/ProductCard"

export default function ProductPage() {
    const params = useParams()
    const router = useRouter()
    const [quantity, setQuantity] = React.useState(1)
    const [selectedSize, setSelectedSize] = React.useState<string | null>(null)

    // Find product
    const product = products.find((p) => p.id === params.id)

    // Image State
    const [mainImage, setMainImage] = React.useState("")

    React.useEffect(() => {
        if (product) {
            setMainImage(product.image)
        }
    }, [product])




    // Related Products Logic
    const [relatedProducts, setRelatedProducts] = React.useState<typeof products>([])

    React.useEffect(() => {
        if (!product) return

        // 1. Filter candidates: same category, different ID
        let candidates = products.filter(p => p.category === product.category && p.id !== product.id)

        // 2. Identify "Sub-Category" via ID Prefix
        const prefixes = [
            "s_close", "s_open", "s_sandal", "s_smallheel", // Women Shoes
            "m_close", "m_curver", "m_godasi", // Men Shoes
            "c_cott", "c_pat", // Specific Clothes
            "acc_earring", "acc_belt", "acc_hat", "acc_wax", "acc_heelpad", "acc_neck", "acc_perfume", "acc_scarf", // Accessories
            "b_food", "b" // Bags
        ]

        // Find longest matching prefix
        const matchingPrefix = prefixes
            .filter(prefix => product.id.startsWith(prefix))
            .sort((a, b) => b.length - a.length)[0]

        // If we have a specific prefix (e.g. 's_close'), prioritize items sharing it
        // Special case: 'c' without underscore usually means dress in this dataset (c1, c2), filtered implicitly if no other prefix matches
        // If product is 'c1' (Dress), matchingPrefix might be undefined or we can rely on category fallback. 
        // Let's refine: if product.id matches /^c\d+/, we want other /^c\d+/

        let subTypeCandidates = candidates

        if (matchingPrefix) {
            subTypeCandidates = candidates.filter(p => p.id.startsWith(matchingPrefix))
        } else if (/^c\d+/.test(product.id)) {
            // Heuristic for dresses (c1, c2...) - filter out c_cott, c_pat, etc.
            subTypeCandidates = candidates.filter(p => /^c\d+/.test(p.id))
        }

        // Apply sub-type filter if it yielded results (otherwise fallback to category)
        if (subTypeCandidates.length > 0) {
            candidates = subTypeCandidates
        }

        // 3. Shuffle (Fisher-Yates)
        const shuffled = [...candidates]
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
                ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
        }

        // 4. Take top 4
        setRelatedProducts(shuffled.slice(0, 4))

    }, [product])

    if (!product) {
        return (
            <div className="container mx-auto flex h-96 flex-col items-center justify-center space-y-4 px-4">
                <h1 className="text-2xl font-bold">Product not found</h1>
                <Button onClick={() => router.back()}>Go back</Button>
            </div>
        )
    }

    // Use product.images or fallback to single image
    const productImages = product.images && product.images.length > 0 ? product.images : [product.image]

    const handleAddToCart = () => {
        // In a real app, use a context or store
        console.log("Added to cart:", { ...product, quantity, size: selectedSize })
        alert("Added to cart! (Simulated)")
    }

    const handleBuyNow = () => {
        router.push("/checkout")
    }

    return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            <Button
                variant="ghost"
                className="mb-8 pl-0 hover:bg-transparent hover:text-primary"
                onClick={() => router.back()}
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to shop
            </Button>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-12 mb-16">
                {/* Product Images - Slider/Gallery */}
                <div className="space-y-4">
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                        <Image
                            src={mainImage || product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    {/* Thumbnails */}
                    <div className="flex gap-4 overflow-x-auto pb-2">
                        {productImages.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setMainImage(img)}
                                className={cn(
                                    "relative h-20 w-20 flex-shrink-0 cursor-pointer overflow-hidden rounded-md border-2",
                                    mainImage === img ? "border-primary" : "border-transparent"
                                )}
                            >
                                <Image src={img} alt={`View ${index + 1}`} fill className="object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <div className="mt-2 flex items-center gap-4">
                            <div className="flex text-yellow-500">
                                {[1, 2, 3, 4, 5].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 fill-current" />
                                ))}
                            </div>
                            <span className="text-sm text-muted-foreground">(4.9/5 based on 120 reviews)</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <div className="text-3xl font-bold text-primary">{formatPriceRWF(product.price)}</div>
                        <div className="text-xl text-muted-foreground">{formatPrice(product.price)}</div>
                    </div>

                    <p className="text-muted-foreground">
                        {product.description}
                    </p>

                    {/* Size Selector */}
                    {product.sizes && (
                        <div className="space-y-3">
                            <span className="font-medium">Size</span>
                            <div className="flex flex-wrap gap-3">
                                {product.sizes.map((size) => (
                                    <Button
                                        key={size}
                                        variant={selectedSize === size ? "default" : "outline"}
                                        onClick={() => setSelectedSize(size)}
                                        className="h-10 w-10 p-0"
                                    >
                                        {size}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Quantity */}
                    <div className="space-y-3">
                        <span className="font-medium">Quantity</span>
                        <div className="flex items-center gap-3">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            >
                                <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-12 text-center text-lg font-medium">{quantity}</span>
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                            <ShoppingCart className="mr-2 h-5 w-5" />
                            Add to Cart
                        </Button>
                        <Button size="lg" variant="secondary" className="flex-1" onClick={handleBuyNow}>
                            Buy Now
                        </Button>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>In stock and ready to ship</span>
                    </div>

                    {/* Social Inquiry */}
                    <div className="mt-8 border-t pt-6">
                        <p className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wider">Direct Inquiry</p>
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Button
                                variant="outline"
                                className="flex-1 border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700"
                                onClick={() => {
                                    const text = encodeURIComponent(`Hello Batel Collection! I'm interested in:\n\n*Product:* ${product.name}\n*Price:* ${formatPriceRWF(product.price)} / ${formatPrice(product.price)}\n${selectedSize ? `*Size:* ${selectedSize}` : ""}\n\nLink: ${window.location.href}`);
                                    window.open(`https://wa.me/250722439280?text=${text}`, "_blank");
                                }}
                            >
                                <MessageCircle className="mr-2 h-5 w-5" />
                                WhatsApp
                            </Button>
                            <Button
                                variant="outline"
                                className="flex-1 border-[#E4405F] text-[#E4405F] hover:bg-pink-50 hover:text-[#E4405F]"
                                onClick={() => {
                                    // Instagram DM deep link
                                    window.open("https://www.instagram.com/direct/t/17845105979503053/", "_blank");
                                }}
                            >
                                <Instagram className="mr-2 h-5 w-5" />
                                Instagram Direct
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products Section */}
            {relatedProducts.length > 0 && (
                <div className="mt-16 border-t pt-12">
                    <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {relatedProducts.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
