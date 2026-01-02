import Link from "next/link"
import { Component, Github, Twitter, Search, Command } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <div className="h-6 w-6 bg-primary text-primary-foreground rounded-sm flex items-center justify-center">
                            <Component className="h-4 w-4" />
                        </div>
                        <span className="hidden font-bold sm:inline-block">
                            Craft UI
                        </span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link
                            href="/docs"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Docs
                        </Link>
                        <Link
                            href="/#components"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Blocks
                        </Link>
                        <Link
                            href="/#components"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Components
                        </Link>
                    </nav>
                </div>
                {/* Mobile Logo for small screens */}
                <div className="mr-4 md:hidden">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="h-6 w-6 bg-primary text-primary-foreground rounded-sm flex items-center justify-center">
                            <Component className="h-4 w-4" />
                        </div>
                        <span className="font-bold">Craft UI</span>
                    </Link>
                </div>

                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">       
                    <nav className="flex items-center">
                        <Link
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className={cn(
                                "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9"
                            )}>
                                <Github className="h-4 w-4" />
                                <span className="sr-only">GitHub</span>
                            </div>
                        </Link>
                        <Link
                            href="https://twitter.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className={cn(
                                "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9"
                            )}>
                                <Twitter className="h-4 w-4 fill-current" />
                                <span className="sr-only">Twitter</span>
                            </div>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
