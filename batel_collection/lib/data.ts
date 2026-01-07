
export interface Product {
    id: string
    name: string
    description: string
    price: number
    category: "clothes" | "shoes" | "accessories" | "bags" | "perfume"
    image: string
    images: string[]
    featured?: boolean
    sizes?: string[]
    colors?: string[]
}

export interface Category {
    id: string
    name: string
    description: string
    image: string
}

const products: Product[] = [
    // --- Clothes ---
    {
        id: "c1",
        name: "Elegant Summer Dress",
        description: "Lightweight and breathable fabric perfect for Kigali summers.",
        price: 45000,
        category: "clothes",
        image: "/images/WOMEN/clothes/dress/1.jpeg",
        images: ["/images/WOMEN/clothes/dress/1.jpeg", "/images/WOMEN/clothes/dress/2.jpeg", "/images/WOMEN/clothes/dress/3.jpeg"],
        featured: true,
        sizes: ["S", "M", "L", "XL"],
    },
    {
        id: "c2",
        name: "Chic Evening Gown",
        description: "Stand out at any event with this stunning gown.",
        price: 85000,
        category: "clothes",
        image: "/images/WOMEN/clothes/dress/5.jpeg",
        images: ["/images/WOMEN/clothes/dress/5.jpeg", "/images/WOMEN/clothes/dress/6.jpeg"],
        featured: true,
        sizes: ["M", "L"],
    },
    {
        id: "c3",
        name: "Casual Day Dress",
        description: "A trendy addition to your casual wardrobe.",
        price: 35000,
        category: "clothes",
        image: "/images/WOMEN/clothes/dress/8.jpeg",
        images: ["/images/WOMEN/clothes/dress/8.jpeg", "/images/WOMEN/clothes/dress/9.jpeg"],
    },
    {
        id: "c4",
        name: "Floral Summer Dress",
        description: "Beautiful floral pattern for sunny days.",
        price: 42000,
        category: "clothes",
        image: "/images/WOMEN/clothes/dress/4.jpeg",
        images: ["/images/WOMEN/clothes/dress/4.jpeg", "/images/WOMEN/clothes/dress/7.jpeg"],
        featured: true,
    },

    // --- Clothes: Cotton/Coats ---
    {
        id: "c_cott_1",
        name: "Stylish Outerwear",
        description: "Comfortable and stylish addition to your wardrobe.",
        price: 38000,
        category: "clothes",
        image: "/images/WOMEN/clothes/cott/cott1/1.jpeg",
        images: ["/images/WOMEN/clothes/cott/cott1/1.jpeg"],
    },

    // --- Clothes: Pants (Pats) ---
    // Pat 1
    ...Array.from({ length: 1 }, (_, i) => ({
        id: `c_pat1_${i + 1}`,
        name: `Casual Trousers Design 1`,
        description: "Comfortable fit trousers.",
        price: 28000,
        category: "clothes" as const,
        image: `/images/WOMEN/clothes/pats/pat1/1.jpeg`,
        images: [`/images/WOMEN/clothes/pats/pat1/1.jpeg`, `/images/WOMEN/clothes/pats/pat1/2.jpeg`, `/images/WOMEN/clothes/pats/pat1/3.jpeg`],
        sizes: ["S", "M", "L"],
    })),
    // Pat 2
    ...Array.from({ length: 1 }, (_, i) => ({
        id: `c_pat2_${i + 1}`,
        name: `Formal Pants Design 2`,
        description: "Smart look for office or events.",
        price: 32000,
        category: "clothes" as const,
        image: `/images/WOMEN/clothes/pats/pat2/1.jpeg`,
        images: [`/images/WOMEN/clothes/pats/pat2/1.jpeg`, `/images/WOMEN/clothes/pats/pat2/2.jpeg`, `/images/WOMEN/clothes/pats/pat2/3.jpeg`],
        sizes: ["M", "L", "XL"],
    })),
    // Pat 3
    ...Array.from({ length: 1 }, (_, i) => ({
        id: `c_pat3_${i + 1}`,
        name: `Stylish Pants Design 3`,
        description: "Trendy cut and comfortable fabric.",
        price: 30000,
        category: "clothes" as const,
        image: `/images/WOMEN/clothes/pats/pat3/1.jpeg`,
        images: [`/images/WOMEN/clothes/pats/pat3/1.jpeg`, `/images/WOMEN/clothes/pats/pat3/2.jpeg`],
        sizes: ["S", "M", "L"],
    })),
    // Pat 4
    ...Array.from({ length: 1 }, (_, i) => ({
        id: `c_pat4_${i + 1}`,
        name: `Modern Pants Design 4`,
        description: "Modern style for everyday wear.",
        price: 29000,
        category: "clothes" as const,
        image: `/images/WOMEN/clothes/pats/pat4/1.jpeg`,
        images: [`/images/WOMEN/clothes/pats/pat4/1.jpeg`, `/images/WOMEN/clothes/pats/pat4/2.jpeg`],
        sizes: ["36", "38", "40"],
    })),


    // --- Bags ---
    {
        id: "b1",
        name: "Premium Bag Collection 1",
        description: "Genuine quality bag for daily use.",
        price: 60000,
        category: "bags",
        image: "/images/WOMEN/bags/bag1/1.jpeg",
        images: ["/images/WOMEN/bags/bag1/1.jpeg", "/images/WOMEN/bags/bag1/2.jpeg"],
        featured: true,
    },
    {
        id: "b2",
        name: "Stylish Bag Collection 2",
        description: "Spacious and stylish, perfect for work or travel.",
        price: 45000,
        category: "bags",
        image: "/images/WOMEN/bags/bag2/1.jpeg",
        images: ["/images/WOMEN/bags/bag2/1.jpeg", "/images/WOMEN/bags/bag2/1.jpeg"],
    },
    {
        id: "b3",
        name: "Elegant Bag Collection 3",
        description: "A perfect accessory for your outfit.",
        price: 55000,
        category: "bags",
        image: "/images/WOMEN/bags/bag3/1.jpeg",
        images: ["/images/WOMEN/bags/bag3/1.jpeg", "/images/WOMEN/bags/bag3/2.jpeg"],
    },
    {
        id: "b4",
        name: "Trendy Bag Collection 4",
        description: "Stay trendy with this modern design.",
        price: 50000,
        category: "bags",
        image: "/images/WOMEN/bags/bag4/1.jpeg",
        images: ["/images/WOMEN/bags/bag4/1.jpeg", "/images/WOMEN/bags/bag4/2.jpeg"],
    },
    {
        id: "b_food",
        name: "Luxury Food Bag",
        description: "Keep your items fresh and organized.",
        price: 35000,
        category: "bags",
        image: "/images/WOMEN/bags/food_bag/1.jpeg",
        images: ["/images/WOMEN/bags/food_bag/1.jpeg", "/images/WOMEN/bags/food_bag/2.jpeg"],
    },

    // --- Accessories: Scarves (From Clothes Folder) ---
    ...Array.from({ length: 23 }, (_, i) => ({
        id: `acc_scarf_${i + 1}`,
        name: `Fashion Scarf ${i + 1}`,
        description: "Soft and elegant scarf to complement your outfit.",
        price: 8000,
        category: "accessories" as const, // Categorizing as accessory
        image: `/images/WOMEN/clothes/scarfs/${i + 1}.jpeg`,
        images: [`/images/WOMEN/clothes/scarfs/${i + 1}.jpeg`],
    })),

    // --- Accessories: Earrings (All 11) ---
    ...Array.from({ length: 11 }, (_, i) => ({
        id: `acc_earring_${i + 1}`,
        name: `Elegant Earrings ${i + 1}`,
        description: "Shine bright with these elegant accessories.",
        price: 15000,
        category: "accessories" as const,
        image: `/images/WOMEN/Accessories/earrings/${i + 1}.jpeg`,
        images: [`/images/WOMEN/Accessories/earrings/${i + 1}.jpeg`],
    })),

    // --- Accessories: Belts ---
    {
        id: "acc_belt_1",
        name: "Classic Leather Belt",
        description: "A perfect addition to any outfit.",
        price: 12000,
        category: "accessories",
        image: "/images/WOMEN/Accessories/belt/b1/1.jpeg",
        images: ["/images/WOMEN/Accessories/belt/b1/1.jpeg"],
    },

    // --- Accessories: Hats (Fascinator) ---
    ...Array.from({ length: 9 }, (_, i) => ({
        id: `acc_hat_${i + 1}`,
        name: `Fascinator Hat ${i + 1}`,
        description: "Stylish fascinator hat for special occasions.",
        price: 25000,
        category: "accessories" as const,
        image: `/images/WOMEN/Accessories/Fascinator_hat/${i + 1}.jpeg`,
        images: [`/images/WOMEN/Accessories/Fascinator_hat/${i + 1}.jpeg`],
    })),

    // --- Accessories: Hair Wax ---
    ...Array.from({ length: 2 }, (_, i) => ({
        id: `acc_wax_${i + 1}`,
        name: `Hair Wax ${i + 1}`,
        description: "Premium hair wax for styling.",
        price: 8000,
        category: "accessories" as const,
        image: `/images/WOMEN/Accessories/Hair wax/${i + 1}.jpeg`,
        images: [`/images/WOMEN/Accessories/Hair wax/${i + 1}.jpeg`],
    })),

    // --- Accessories: Heel Pads ---
    ...Array.from({ length: 3 }, (_, i) => ({
        id: `acc_heelpad_${i + 1}`,
        name: `Comfort Heel Pad ${i + 1}`,
        description: "Add extra comfort to your heels.",
        price: 5000,
        category: "accessories" as const,
        image: `/images/WOMEN/Accessories/heel_pads/${i + 1}.jpeg`,
        images: [`/images/WOMEN/Accessories/heel_pads/${i + 1}.jpeg`],
    })),

    // --- Accessories: Necklaces (Neck1 & Neck2) ---
    // Neck 1 (2 images)
    ...Array.from({ length: 2 }, (_, i) => ({
        id: `acc_neck1_${i + 1}`,
        name: `Gold Necklace Design ${i + 1}`,
        description: "Elegant gold necklace.",
        price: 35000,
        category: "accessories" as const,
        image: `/images/WOMEN/Accessories/necklace/neck1/${i + 1}.jpeg`,
        images: [`/images/WOMEN/Accessories/necklace/neck1/${i + 1}.jpeg`],
    })),
    // Neck 2 (3 images)
    ...Array.from({ length: 3 }, (_, i) => ({
        id: `acc_neck2_${i + 1}`,
        name: `Statement Necklace ${i + 1}`,
        description: "Bold statement necklace.",
        price: 40000,
        category: "accessories" as const,
        image: `/images/WOMEN/Accessories/necklace/neck2/${i + 1}.jpeg`,
        images: [`/images/WOMEN/Accessories/necklace/neck2/${i + 1}.jpeg`],
    })),

    // --- Accessories: Perfumes ---
    {
        id: "acc_perfume_1",
        name: "Signature Perfume",
        description: "Long-lasting fragrance.",
        price: 55000,
        category: "accessories", // User requested as part of accessories
        image: "/images/WOMEN/Accessories/perfumes/perfume1/1.jpeg",
        images: ["/images/WOMEN/Accessories/perfumes/perfume1/1.jpeg"],
    },

    // --- Shoes: Close Shoes (1-14) ---
    ...Array.from({ length: 14 }, (_, i) => ({
        id: `s_close_${i + 1}`,
        name: `Classic Close Shoe ${i + 1}`,
        description: "Comfortable and stylish closed shoe design.",
        price: 55000,
        category: "shoes" as const,
        image: `/images/WOMEN/shoes/close_shoes/close${i + 1}/1.jpeg`,
        images: [`/images/WOMEN/shoes/close_shoes/close${i + 1}/1.jpeg`, `/images/WOMEN/shoes/close_shoes/close${i + 1}/2.jpeg`],
        sizes: ["36", "37", "38", "39", "40"],
    })),

    // --- Shoes: Open Shoes (1-6) ---
    ...Array.from({ length: 6 }, (_, i) => ({
        id: `s_open_${i + 1}`,
        name: `Elegant Open Shoe ${i + 1}`,
        description: "Perfect for warm weather and formal occasions.",
        price: 48000,
        category: "shoes" as const,
        image: `/images/WOMEN/shoes/open_shoes/open${i + 1}/1.jpeg`,
        images: [`/images/WOMEN/shoes/open_shoes/open${i + 1}/1.jpeg`, `/images/WOMEN/shoes/open_shoes/open${i + 1}/2.jpeg`],
        sizes: ["36", "37", "38", "39"],
    })),

    // --- Shoes: Sandals (1-8 only, exploring found 8) ---
    ...Array.from({ length: 8 }, (_, i) => ({
        id: `s_sandal_${i + 1}`,
        name: `Casual Sandal ${i + 1}`,
        description: "Relaxed fit for everyday comfort.",
        price: 35000,
        category: "shoes" as const,
        image: `/images/WOMEN/shoes/sandals/sandal${i + 1}/1.jpeg`,
        images: [`/images/WOMEN/shoes/sandals/sandal${i + 1}/1.jpeg`, `/images/WOMEN/shoes/sandals/sandal${i + 1}/2.jpeg`],
        sizes: ["36", "37", "38", "39"],
    })),

    // --- Shoes: Small Heel (1-19) ---
    ...Array.from({ length: 19 }, (_, i) => ({
        id: `s_smallheel_${i + 1}`,
        name: `Small Heel Shoe ${i + 1}`,
        description: "Elegant small heel for stable comfort.",
        price: 52000,
        category: "shoes" as const,
        image: `/images/WOMEN/shoes/small_heel/small_heel${i + 1}/1.jpeg`,
        images: [`/images/WOMEN/shoes/small_heel/small_heel${i + 1}/1.jpeg`, `/images/WOMEN/shoes/small_heel/small_heel${i + 1}/2.jpeg`],
        sizes: ["36", "37", "38", "39", "40"],
    })).filter(p => p.id !== "s_smallheel_13"),

    // --- MEN'S SHOES ---
    // Close Shoes (Men)
    {
        id: "m_close_1",
        name: "Men's Formal Close Shoe",
        description: "Classic formal shoe for men.",
        price: 65000,
        category: "shoes",
        image: "/images/MEN/shoes/close_shoes/close1/1.jpeg",
        images: ["/images/MEN/shoes/close_shoes/close1/1.jpeg", "/images/MEN/shoes/close_shoes/close1/2.jpeg"],
        sizes: ["40", "41", "42", "43", "44"],
    },
    // Curver Shoes (Men)
    {
        id: "m_curver_1",
        name: "Men's Curver Shoe",
        description: "Stylish and comfortable curver shoe.",
        price: 58000,
        category: "shoes",
        image: "/images/MEN/shoes/curver/1.jpeg",
        images: ["/images/MEN/shoes/curver/1.jpeg", "/images/MEN/shoes/curver/2.jpeg"],
        sizes: ["40", "41", "42", "43"],
    },
    // Godasi Shoes (Men)
    {
        id: "m_godasi_1",
        name: "Men's Godasi Shoe",
        description: "Premium Godasi shoe for men.",
        price: 70000,
        category: "shoes",
        image: "/images/MEN/shoes/godasi/1.png",
        images: ["/images/MEN/shoes/godasi/1.png", "/images/MEN/shoes/godasi/2.jpeg", "/images/MEN/shoes/godasi/3.jpeg", "/images/MEN/shoes/godasi/4.jpeg"],
        sizes: ["41", "42", "43", "44", "45"],
    },
]

export { products }

export const categories: Category[] = [
    {
        id: "clothes",
        name: "Clothing",
        description: "Trendy and fashionable clothes for women.",
        image: "/images/WOMEN/clothes/dress/1.jpeg",
    },
    {
        id: "shoes",
        name: "Shoes",
        description: "Comfortable and stylish footwear.",
        image: "/images/WOMEN/shoes/high_heel/high_heel1/1.jpeg",
    },
    {
        id: "accessories",
        name: "Accessories",
        description: "Complete your look with our accessories.",
        image: "/images/WOMEN/Accessories/earrings/1.jpeg",
    },
    {
        id: "bags",
        name: "Bags",
        description: "Carry your essentials in style.",
        image: "/images/WOMEN/bags/bag1/1.jpeg",
    },
]
