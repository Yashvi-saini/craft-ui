"use client"

import * as React from "react"
import { Check, Copy, Monitor, Smartphone, Tablet } from "lucide-react"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface BlockViewerProps {
    name: string
    files: Array<{ path: string; content: string }>
    children: React.ReactNode
}

export function BlockViewer({ name, files, children }: BlockViewerProps) {
    const [view, setView] = React.useState<"preview" | "code">("preview")
    const [selectedFile, setSelectedFile] = React.useState(files[0]?.path)
    const [hasCopied, setHasCopied] = React.useState(false)

    const currentFile = files.find((f) => f.path === selectedFile) || files[0]

    React.useEffect(() => {
        if (!files.find(f => f.path === selectedFile)) {
            setSelectedFile(files[0]?.path)
        }
    }, [files])


    React.useEffect(() => {
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }, [hasCopied])

    return (
        <div className="group relative flex flex-col gap-4 border rounded-lg overflow-hidden bg-background">
            <div className="flex items-center justify-between p-4 border-b">
                <h3 className="font-semibold">{name}</h3>
                <div className="flex items-center gap-2">
                    <div className="flex items-center rounded-md border p-1 bg-muted">
                        <Button
                            variant="ghost"
                            size="icon"
                            className={cn("h-7 w-7 rounded-sm", view === "preview" && "bg-background shadow-sm")}
                            onClick={() => setView("preview")}
                        >
                            <Monitor className="h-4 w-4" />
                            <span className="sr-only">Preview</span>
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className={cn("h-7 w-7 rounded-sm", view === "code" && "bg-background shadow-sm")}
                            onClick={() => setView("code")}
                        >
                            <span className="font-mono text-xs font-bold px-1">&lt;/&gt;</span>
                            <span className="sr-only">Code</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="relative">
                {view === "preview" && (
                    <div className="min-h-[350px] w-full flex items-center justify-center p-8 bg-zinc-50/50 dark:bg-zinc-950/50">
                        <div className="w-full max-w-full overflow-hidden rounded-md border bg-background shadow-sm">
                            {children}
                        </div>
                    </div>
                )}
                {view === "code" && (
                    <div className="flex flex-col md:flex-row min-h-[350px] w-full border-t">
                        {/* File Sidebar */}
                        <div className="w-full md:w-[250px] border-b md:border-b-0 md:border-r bg-muted/30 overflow-y-auto max-h-[350px]">
                            <div className="p-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Files
                            </div>
                            <div className="flex flex-col">
                                {files.map((file) => (
                                    <button
                                        key={file.path}
                                        onClick={() => setSelectedFile(file.path)}
                                        className={cn(
                                            "text-sm text-left px-4 py-2 hover:bg-muted transition-colors truncate",
                                            selectedFile === file.path && "bg-muted font-medium text-foreground"
                                        )}
                                    >
                                        {file.path}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Code Area */}
                        <div className="flex-1 relative bg-zinc-950 text-white min-h-[350px]">
                            <div className="absolute right-4 top-4 z-10">
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="h-8 w-8 text-zinc-400 hover:text-zinc-50 hover:bg-zinc-800"
                                    onClick={() => {
                                        navigator.clipboard.writeText(currentFile?.content || "")
                                        setHasCopied(true)
                                    }}
                                >
                                    {hasCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                    <span className="sr-only">Copy code</span>
                                </Button>
                            </div>
                            <div className="absolute inset-0 overflow-auto p-4 pt-10">
                                <pre className="text-sm font-mono">
                                    <code>{currentFile?.content}</code>
                                </pre>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
