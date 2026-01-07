
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Package } from "lucide-react"

export default function UserDashboard() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">My Account</h1>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                        <Package className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2</div>
                        <p className="text-xs text-muted-foreground">Lifetime orders</p>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Order History</h2>
                <Card>
                    <CardContent className="p-0">
                        <div className="border-b p-4 grid grid-cols-4 font-medium text-sm">
                            <div>Order ID</div>
                            <div>Date</div>
                            <div>Status</div>
                            <div className="text-right">Total</div>
                        </div>
                        {/* Mock Order Row */}
                        <div className="p-4 grid grid-cols-4 text-sm">
                            <div>#ORD-001</div>
                            <div>Jan 1, 2024</div>
                            <div className="text-green-600">Delivered</div>
                            <div className="text-right">$129.99</div>
                        </div>
                        <div className="p-4 grid grid-cols-4 text-sm">
                            <div>#ORD-002</div>
                            <div>Feb 15, 2024</div>
                            <div className="text-orange-500">Processing</div>
                            <div className="text-right">$59.99</div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
