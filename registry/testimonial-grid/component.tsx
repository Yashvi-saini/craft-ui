import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialGrid() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                    Trusted by Developers
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <div className="flex text-primary">
                                <Star className="h-4 w-4 fill-primary" />
                                <Star className="h-4 w-4 fill-primary" />
                                <Star className="h-4 w-4 fill-primary" />
                                <Star className="h-4 w-4 fill-primary" />
                                <Star className="h-4 w-4 fill-primary" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                &quot;This library has saved me hundreds of hours. The components are beautiful and easy to customize.&quot;
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-slate-400" />
                                <div>
                                    <p className="text-sm font-semibold">Sofia Davis</p>
                                    <p className="text-xs text-muted-foreground">CTO at TechStart</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <div className="flex text-primary">
                                <Star className="h-4 w-4 fill-primary" />
                                <Star className="h-4 w-4 fill-primary" />
                                <Star className="h-4 w-4 fill-primary" />
                                <Star className="h-4 w-4 fill-primary" />
                                <Star className="h-4 w-4 fill-primary" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                &quot;The attention to detail in these components is unmatched. Accessibility is top notch.&quot;
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-slate-400" />
                                <div>
                                    <p className="text-sm font-semibold">Jackson Lee</p>
                                    <p className="text-xs text-muted-foreground">Frontend Lead</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <div className="flex text-primary">
                                <Star className="h-4 w-4 fill-primary" />
                                <Star className="h-4 w-4 fill-primary" />
                                <Star className="h-4 w-4 fill-primary" />
                                <Star className="h-4 w-4 fill-primary" />
                                <Star className="h-4 w-4 fill-primary" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                &quot;A must-have for any modern web project. The dark mode implementation is flawless.&quot;
                            </p>
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 rounded-full bg-slate-400" />
                                <div>
                                    <p className="text-sm font-semibold">Isabella Chen</p>
                                    <p className="text-xs text-muted-foreground">Product Designer</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
