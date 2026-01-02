import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-background border-t">
            <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">About Us</h3>
                        <p className="text-sm text-muted-foreground">
                            We are dedicated to building the best UI components for the modern web.
                            Our mission is to empower developers to create stunning interfaces.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Services</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Web Design
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Development
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">
                                    Consulting
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                        <div className="pt-4">
                            <p className="text-xs text-muted-foreground">© 2026 Craft UI. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
