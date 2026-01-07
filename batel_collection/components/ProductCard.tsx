
import Link from "next/link"
import Image from "next/image"
import { Eye, ShoppingCart } from "lucide-react"

import { Product } from "@/lib/data"
import { formatPrice, formatPriceRWF } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
            <div className="aspect-[3/4] overflow-hidden relative group">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                />
                {/* Hover overlay with actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Link href={`/product/${product.id}`}>
                        <Button size="icon" variant="secondary">
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">View Details</span>
                        </Button>
                    </Link>
                </div>
            </div>
            <CardHeader className="p-4">
                <CardTitle className="line-clamp-1 text-base">{product.name}</CardTitle>
                <p className="text-sm text-muted-foreground capitalize">{product.category}</p>
            </CardHeader>
            <CardContent className="p-4 pt-0 flex-1">
                <div className="flex flex-col">
                    <p className="font-bold text-lg">{formatPriceRWF(product.price)}</p>
                    <p className="text-sm text-muted-foreground">{formatPrice(product.price)}</p>
                </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
            </CardFooter>
        </Card>
    )
}
