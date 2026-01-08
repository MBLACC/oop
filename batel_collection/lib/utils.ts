import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatPrice(price: number | string) {
    const amountRWF = typeof price === "string" ? parseFloat(price) : price
    const amountUSD = amountRWF / 1285 // Convert RWF to USD
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(amountUSD)
}

export function formatPriceRWF(price: number | string) {
    const amountRWF = typeof price === "string" ? parseFloat(price) : price
    return new Intl.NumberFormat("en-RW", {
        style: "currency",
        currency: "RWF",
        maximumFractionDigits: 0,
    }).format(amountRWF)
}

export const BUSINESS_LOCATION = "Kigali, Rwanda"
