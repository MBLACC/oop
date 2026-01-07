
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { categories, products } from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/DashBoard_content/1.png"
            alt="Hero Background"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="relative z-10 max-w-2xl px-4 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Discover Your Unique Style
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Explore the latest trends in women's fashion, accessories, and more at Batel Collection.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/shop">
              <Button size="lg" className="text-lg px-8">
                Shop Now
              </Button>
            </Link>
            <Link href="/shop?category=accessories">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-white border-white hover:bg-white hover:text-black">
                Explore Accessories
              </Button>
            </Link>
          </div>
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
