import Link from "next/link"
import { Instagram, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function FooterLarge() {
    return (
        <footer className="bg-background border-t">
            <div className="container py-12 md:py-16 lg:py-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-bold">Craft UI</h3>
                        <p className="text-muted-foreground w-full max-w-sm">
                            Beautifully designed components built with Radix UI and Tailwind CSS.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
                        <div className="flex flex-col gap-4">
                            <h4 className="font-semibold">Product</h4>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                Features
                            </Link>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                Pricing
                            </Link>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                Documentation
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-semibold">Company</h4>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                About
                            </Link>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                Blog
                            </Link>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                Careers
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-semibold">Legal</h4>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                Privacy
                            </Link>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                                Terms
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between pt-8 border-t">
                    <p className="text-sm text-muted-foreground">
                        © 2026 Craft-UI. All rights reserved.
                    </p>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input type="email" placeholder="Subscribe to newsletter" />
                        <Button type="submit">Subscribe</Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
