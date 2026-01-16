import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactForm() {
    return (
        <div className="container py-12 md:py-24 lg:py-32">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter">Get in touch</h2>
                        <p className="text-muted-foreground">
                            Fill out the form below and we&apos;ll get back to you as soon as possible.
                        </p>
                    </div>
                    <div className="space-y-4 text-muted-foreground">
                        <div className="flex items-center space-x-2">
                            <span>📍</span>
                            <span>123 Abc road </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>📧</span>
                            <span>hello@example.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>📞</span>
                            <span>(555) 123-4567</span>
                        </div>
                    </div>
                    {/* Map Placeholder */}
                    <div className="aspect-video w-full rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
                        Map Placeholder
                    </div>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Send us a message</CardTitle>
                        <CardDescription>We&apos;d love to hear from you.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="first-name">First name</Label>
                                <Input id="first-name" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="last-name">Last name</Label>
                                <Input id="last-name" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input id="subject" placeholder="Project inquiry" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <textarea
                                id="message"
                                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Tell us about your project..."
                            />
                        </div>
                        <Button className="w-full">Send Message</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
