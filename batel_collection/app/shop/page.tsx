"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

import { ProductCard } from "@/components/ProductCard"
import { Button } from "@/components/ui/button"

import { products, categories, type Product } from "@/lib/data"
import { cn } from "@/lib/utils"

function ShopContent() {
    const searchParams = useSearchParams()
    const categoryParam = searchParams.get("category")

    // State
    const [activeCategory, setActiveCategory] = React.useState<string | null>(
        categoryParam || "all"
    )
    const [sortOption, setSortOption] = React.useState("featured")

    // Effect to sync URL param with state
    React.useEffect(() => {
        setActiveCategory(categoryParam || "all")
    }, [categoryParam])

    // Filter products
    const filteredProducts = React.useMemo(() => {
        let filtered = products

        if (activeCategory && activeCategory !== "all") {
            filtered = filtered.filter((p) => p.category === activeCategory)
        }

        return filtered
    }, [activeCategory])

    // Sort products
    const sortedProducts = React.useMemo(() => {
        const sorted = [...filteredProducts]

        switch (sortOption) {
            case "price-low":
                return sorted.sort((a, b) => a.price - b.price)
            case "price-high":
                return sorted.sort((a, b) => b.price - a.price)
            case "newest":
                // Assuming newest means highest ID for this mock
                return sorted.sort((a, b) => Number(b.id) - Number(a.id))
            case "featured":
            default:
                return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        }
    }, [filteredProducts, sortOption])

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Shop</h1>
                    <p className="text-muted-foreground mt-2">
                        Browsable collection of {filteredProducts.length} items
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar / Filters - Mobile will scroll, desktop sticky */}
                <aside className="w-full md:w-64 space-y-8">
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Categories</h3>
                        <div className="flex flex-wrap gap-2 md:flex-col">
                            <Button
                                variant={activeCategory === "all" ? "default" : "ghost"}
                                className={cn("justify-start", activeCategory === "all" && "bg-primary text-primary-foreground")}
                                onClick={() => setActiveCategory("all")}
                            >
                                All Products
                            </Button>
                            {categories.map((cat) => (
                                <Button
                                    key={cat.id}
                                    variant={activeCategory === cat.id ? "default" : "ghost"}
                                    className={cn("justify-start", activeCategory === cat.id && "bg-primary text-primary-foreground")}
                                    onClick={() => setActiveCategory(cat.id)}
                                >
                                    {cat.name}
                                </Button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="flex justify-end mb-6">
                        {/* Sort Select */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Sort by:</span>
                            <select
                                className="h-9 w-[180px] rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                            >
                                <option value="featured">Featured</option>
                                <option value="newest">Newest Arrivals</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    {sortedProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sortedProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-16 text-center">
                            <p className="text-lg font-medium text-muted-foreground">
                                No products found in this category.
                            </p>
                            <Button
                                variant="link"
                                onClick={() => setActiveCategory("all")}
                                className="mt-2"
                            >
                                Clear Filters
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default function ShopPage() {
    return (
        <Suspense fallback={<div className="container mx-auto py-16 text-center">Loading shop...</div>}>
            <ShopContent />
        </Suspense>
    )
}
