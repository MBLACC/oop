
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-center">About Batel Collection</h1>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                    Welcome to <strong>Batel Collection</strong>, your premier destination for elegant women's accessories and fashion.
                    Founded with a passion for style and quality, we aim to empower women to express their unique personality through our curated selection of products.
                </p>

                <p>
                    At Batel Collection, we believe that fashion is more than just clothing—it's a form of self-expression.
                    Whether you are looking for the perfect dress for a special occasion, a stylish handbag to complete your outfit,
                    or exquisite jewelry to add a touch of sparkle, we have something for everyone.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-12">
                    <div className="bg-muted p-8 rounded-xl text-center">
                        <h3 className="text-xl font-bold mb-4 text-foreground">Our Mission</h3>
                        <p>To provide high-quality, fashionable accessories that inspire confidence and elegance in every woman.</p>
                    </div>
                    <div className="bg-muted p-8 rounded-xl text-center">
                        <h3 className="text-xl font-bold mb-4 text-foreground">Our Promise</h3>
                        <p>We are committed to exceptional customer service, curated quality, and a seamless shopping experience.</p>
                    </div>
                </div>

                <p>
                    Thank you for choosing Batel Collection. We are delighted to be part of your style journey.
                </p>
            </div>

            <div className="mt-12 text-center">
                <Link href="/contact">
                    <Button size="lg">Contact Us</Button>
                </Link>
            </div>
        </div>
    )
}
