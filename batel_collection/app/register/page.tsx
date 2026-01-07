
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function RegisterPage() {
    return (
        <div className="container mx-auto flex h-screen w-screen flex-col items-center justify-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Create an Account</CardTitle>
                    <CardDescription>
                        Enter your details below to create your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <label>Name</label>
                        <Input placeholder="John Doe" />
                    </div>
                    <div className="grid gap-2">
                        <label>Email</label>
                        <Input type="email" placeholder="m@example.com" />
                    </div>
                    <div className="grid gap-2">
                        <label>Password</label>
                        <Input type="password" />
                    </div>
                    <Link href="/dashboard">
                        <Button className="w-full">Sign Up</Button>
                    </Link>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Link href="/login" className="text-sm text-muted-foreground hover:underline">
                        Already have an account? Sign In
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}
