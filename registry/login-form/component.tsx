"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Eye, EyeOff, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm() {
    const [isVisible, setIsVisible] = useState(false)
    const toggleVisibility = () => setIsVisible(!isVisible)

    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <Link
                            href="/forgot-password"
                            className="ml-auto inline-block text-sm underline"
                        >
                            Forgot your password?
                        </Link>
                    </div>
                    <div className="relative">
                        <Input
                            id="password"
                            type={isVisible ? "text" : "password"}
                            required
                        />
                        <button
                            className="absolute inset-y-0 right-0 flex items-center justify-center px-3 text-muted-foreground/80 hover:text-foreground"
                            onClick={toggleVisibility}
                            type="button"
                            aria-label={isVisible ? "Hide password" : "Show password"}
                        >
                            {isVisible ? (
                                <EyeOff className="h-4 w-4" aria-hidden="true" />
                            ) : (
                                <Eye className="h-4 w-4" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="font-normal text-muted-foreground">Remember me</Label>
                </div>
                <Button className="w-full">Sign in</Button>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Or continue with
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Button variant="outline" className="w-full gap-2">
                        <Github className="h-4 w-4" />
                        GitHub
                    </Button>
                    <Button variant="outline" className="w-full gap-2">
                        <Image
                            src="/google.png"
                            alt="Google"
                            width={16}
                            height={16}
                            className="h-4 w-4"
                        />
                        Google
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
