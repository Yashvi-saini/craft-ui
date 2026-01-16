import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaSimple() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Ready to get started?
                        </h2>
                        <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl">
                            Join thousands of developers building the next generation of web applications.
                        </p>
                    </div>
                    <div className="space-x-4">
                        <Button asChild size="lg" variant="secondary">
                            <Link href="#">Get Started</Link>
                        </Button>
                        <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                            <Link href="#">Contact Sales</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
