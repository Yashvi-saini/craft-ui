import {
    Shield,
    Zap,
    Layout,
    BarChart,
    Globe,
    Settings
} from "lucide-react"

export function FeatureGrid() {
    return (
        <section className="container py-12 md:py-24 lg:py-32">
            <div className="mx-auto grid max-w-5xl gap-12 text-center lg:gap-16">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Feature Rich</h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        Everything you need to build standard web applications.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col items-center gap-4 p-6 border rounded-xl bg-card">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <Shield className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Secure by default</h3>
                        <p className="text-center text-muted-foreground">
                            Authentication and authorization handled securely.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-6 border rounded-xl bg-card">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <Zap className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Lightning Fast</h3>
                        <p className="text-center text-muted-foreground">
                            Optimized for speed and performance out of the box.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-6 border rounded-xl bg-card">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <Layout className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Responsive</h3>
                        <p className="text-center text-muted-foreground">
                            Looks great on mobile, tablet, and desktop devices.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-6 border rounded-xl bg-card">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <BarChart className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Analytics</h3>
                        <p className="text-center text-muted-foreground">
                            Built-in analytics to track your growth.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-6 border rounded-xl bg-card">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <Globe className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Global</h3>
                        <p className="text-center text-muted-foreground">
                            Deploy to the edge and reach users worldwide.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4 p-6 border rounded-xl bg-card">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <Settings className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">Customizable</h3>
                        <p className="text-center text-muted-foreground">
                            Easily configure and extend to fit your needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
