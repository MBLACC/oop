
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
    return (
        <div className="container mx-auto flex h-screen w-screen flex-col items-center justify-center">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <label htmlFor="email">Email</label>
                        <Input id="email" type="email" placeholder="m@example.com" />
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="password">Password</label>
                        <Input id="password" type="password" />
                    </div>
                    <Link href="/dashboard">
                        <Button className="w-full">Sign In</Button>
                    </Link>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Link href="/register" className="text-sm text-muted-foreground hover:underline">
                        Don't have an account? Sign Up
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}
