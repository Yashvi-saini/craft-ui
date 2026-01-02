import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { promises as fs } from "fs"
import path from "path"

import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { BLOCK_REGISTRY } from "@/lib/blocks-registry"
import { BlockViewer } from "@/components/block-viewer/block-viewer"

interface PageProps {
    params: Promise<{
        category: string
    }>
}

export default async function CategoryPage({ params }: PageProps) {
    const { category } = await params

    const categoryData = BLOCK_REGISTRY[category]

    if (!categoryData) {
        return (
            <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <div className="container py-12">
                    <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8">
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Back
                    </Link>
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <h1 className="text-2xl font-bold">Coming Soon</h1>
                        <p className="text-muted-foreground mt-2">
                            We are working on the components for <span className="font-semibold capitalize">{category}</span>.
                        </p>
                        <Button asChild className="mt-6">
                            <Link href="/">Go Home</Link>
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
// means we have components in this category
    const blocksWithContent = await Promise.all(categoryData.blocks.map(async (block: any) => {
        const filesWithContent = await Promise.all(block.files.map(async (file: any) => {
            const filePath = path.join(process.cwd(), file.path)
            try {
                const content = await fs.readFile(filePath, "utf-8")
                return {
                    path: file.type === "component" ? `components/${block.name.toLowerCase().replace(/\s+/g, '-')}.tsx` : file.path,
                    content
                }
            } catch (error) {
                console.error(`Error reading file: ${filePath}`, error)
                return {
                    path: file.path,
                    content: "// Error reading file content"
                }
            }
        }))
        return {
            ...block,
            files: filesWithContent
        }
    }))

    return (
        <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1 bg-zinc-50/30 dark:bg-zinc-950/30">
                <div className="container py-10">
                    <Link href="/" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6">
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Back to components
                    </Link>

                    <div className="space-y-2 mb-10">
                        <h1 className="text-3xl font-bold tracking-tight capitalize">{categoryData.title}</h1>
                        <p className="text-lg text-muted-foreground">{categoryData.description}</p>
                    </div>

                    <div className="grid gap-12">
                        {blocksWithContent.map((block: any) => {
                            const Component = block.component
                            return (
                                <div key={block.name} className="space-y-4">
                                    <BlockViewer name={block.name} files={block.files}>
                                        <Component />
                                    </BlockViewer>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </main>
        </div>
    )
}

export function generateStaticParams() {
    return Object.keys(BLOCK_REGISTRY).map((category) => ({
        category,
    }))
}
