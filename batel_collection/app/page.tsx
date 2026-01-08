"use client"

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { categories, products } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";

const HERO_IMAGES = [
  "/images/DashBoard_content/1.png",
  "/images/DashBoard_content/2.png",
  "/images/DashBoard_content/lipstick_victor.png",
  "/images/DashBoard_content/mascar1.png",
  "/images/DashBoard_content/perfume2.png",
  "/images/DashBoard_content/11.jpeg",
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const featuredProducts = products.filter((p) => p.featured);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black/40">
          {HERO_IMAGES.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
            >
              <Image
                src={src}
                alt={`Hero Background ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          {/* Constant overlay to ensure text contrast even if images are bright or missing */}
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl px-4 space-y-6">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Discover Your Unique Style
          </h1>
          <p className="text-base md:text-xl text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Explore the latest trends in women's fashion, accessories, and more at Batel Collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Link href="/shop" className="w-full sm:w-auto">
              <Button size="lg" className="w-full text-lg px-8">
                Shop Now
              </Button>
            </Link>
            <Link href="/shop?category=accessories" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full text-lg px-8 bg-transparent text-white border-white hover:bg-[#514243] hover:text-white hover:border-[#514243] transition-colors"
              >
                Explore Accessories
              </Button>
            </Link>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/shop?category=${category.id}`}
                className="group relative h-64 overflow-hidden rounded-lg shadow-md"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wider drop-shadow-md">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link href="/shop">
              <Button variant="link">View All Products</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
