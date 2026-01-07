
"use client"

import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                {/* Contact Information */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
                        <p className="text-muted-foreground">
                            Have questions about our products or your order? We're here to help!
                            Reach out to us via phone, email, or WhatsApp.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardContent className="flex items-center gap-4 p-6">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-medium">Phone / WhatsApp</h3>
                                    <p className="text-muted-foreground">
                                        <a href="https://wa.me/250722439280" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                            0722439280
                                        </a>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="flex items-center gap-4 p-6">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-medium">Email</h3>
                                    <p className="text-muted-foreground">batelCollection@gmail.com</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="flex items-center gap-4 p-6">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-medium">Location</h3>
                                    <p className="text-muted-foreground">Online Store (Based in Kigali)</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card border rounded-xl p-8 shadow-sm">
                    <h2 className="text-xl font-semibold mb-6">Send us a Message</h2>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Name</label>
                                <Input placeholder="Your name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <Input type="email" placeholder="email@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Subject</label>
                            <Input placeholder="How can we help?" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Message</label>
                            <textarea
                                className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Type your message here..."
                            />
                        </div>
                        <Button className="w-full">
                            Send Message
                        </Button>
                    </form>
                </div>

            </div>
        </div>
    )
}
