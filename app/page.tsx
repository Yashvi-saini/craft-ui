"use client"

import * as React from "react"
import Link from "next/link"
import {
  Box,
  LayoutTemplate,
  Type,
  MousePointer2,
  HelpCircle,
  CreditCard,
  MessageSquare,
  Menu,
  Image as ImageIcon,
  Shield,
  Users
} from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Category {
  title: string
  count: string
  href: string
  icon: React.ElementType
  isPro?: boolean
}

const categories: Category[] = [
  { title: "Auth", count: "2 Components", href: "/blocks/auth", icon: Shield },
  { title: "Header", count: "1 Component", href: "/blocks/header", icon: LayoutTemplate },
  { title: "Footer", count: "1 Component", href: "/blocks/footer", icon: Menu },
  { title: "Contact", count: "0 Components", href: "/blocks/contact", icon: Users },
  { title: "CTA", count: "0 Components", href: "/blocks/cta", icon: MousePointer2 },
  { title: "FAQs", count: "0 Components", href: "/blocks/faqs", icon: HelpCircle },
  { title: "Feature", count: "0 Components", href: "/blocks/feature", icon: Box },
  { title: "Form", count: "0 Components", href: "/blocks/form", icon: Type },
  { title: "Hero", count: "0 Components", href: "/blocks/hero", icon: ImageIcon },
  { title: "Pricing", count: "0 Components", href: "/blocks/pricing", icon: CreditCard },
  { title: "Testimonial", count: "0 Components", href: "/blocks/testimonial", icon: MessageSquare },
]

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <SiteHeader />

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="flex-1">
        <section className="mx-auto flex flex-col items-center gap-4 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 px-4 text-center">
         
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Beautifully crafted <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-zinc-100 dark:to-zinc-400">
              reusable components
            </span>
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Accessible and customizable components that you can copy and paste into your apps. Built with Radix UI and Tailwind CSS.
          </p>
        </section>

        <main className="container pb-12 md:pb-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Link
                  key={category.title}
                  href={category.href}
                  className="group relative block focus:outline-none"
                >
                  <Card className="h-full border bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/20 dark:hover:border-primary/40">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <div className="mb-4 rounded-full bg-muted/50 p-4 ring-1 ring-inset ring-foreground/5 group-hover:bg-primary/5 transition-colors">
                        <Icon className="h-6 w-6 text-foreground/70 group-hover:text-primary transition-colors" />
                      </div>

                      <h3 className="text-lg font-bold tracking-tight text-foreground">
                        {category.title}
                      </h3>

                      <p className={cn(
                        "mt-2 text-sm font-medium",
                        category.isPro ? "text-indigo-500" : "text-muted-foreground"
                      )}>
                        {category.count}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </main>
      </div>
    </div>
  )
}
