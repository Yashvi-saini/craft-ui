import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function PricingCards() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
                    {/* Basic Plan */}
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle>Basic</CardTitle>
                            <CardDescription>Essential features for individuals.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-4xl font-bold">$19<span className="text-sm font-medium text-muted-foreground">/mo</span></div>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-primary" />
                                    <span className="text-sm text-muted-foreground">1 User</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-primary" />
                                    <span className="text-sm text-muted-foreground">5 Projects</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-primary" />
                                    <span className="text-sm text-muted-foreground">Basic Support</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Get Started</Button>
                        </CardFooter>
                    </Card>

                    {/* Pro Plan */}
                    <Card className="flex flex-col border-primary relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-bold rounded-bl-lg">
                            POPULAR
                        </div>
                        <CardHeader>
                            <CardTitle>Pro</CardTitle>
                            <CardDescription>Perfect for small teams.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-4xl font-bold">$49<span className="text-sm font-medium text-muted-foreground">/mo</span></div>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-primary" />
                                    <span className="text-sm text-muted-foreground">5 Users</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-primary" />
                                    <span className="text-sm text-muted-foreground">Unlimited Projects</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-primary" />
                                    <span className="text-sm text-muted-foreground">Priority Support</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-primary" />
                                    <span className="text-sm text-muted-foreground">Analytics</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant="default">Get Started</Button>
                        </CardFooter>
                    </Card>

                    {/* Enterprise Plan */}
                    <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle>Enterprise</CardTitle>
                            <CardDescription>Scalable solution for large orgs.</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-4xl font-bold">Custom</div>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-primary" />
                                    <span className="text-sm text-muted-foreground">Unlimited Users</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-primary" />
                                    <span className="text-sm text-muted-foreground">Advanced Security</span>
                                </li>
                                <li className="flex items-center">
                                    <Check className="mr-2 h-4 w-4 text-primary" />
                                    <span className="text-sm text-muted-foreground">SLA & Dedicated Support</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" variant="outline">Contact Sales</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}
