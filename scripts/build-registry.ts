import fs from "fs-extra"
import path from "path"

const REGISTRY_PATH = path.join(process.cwd(), "registry")
const PUBLIC_PATH = path.join(process.cwd(), "public")

async function buildRegistry() {
    const blocks: Record<string, { name: string; type: string; files: { name: string; content: string }[] }> = {}

    const folders = await fs.readdir(REGISTRY_PATH)

    for (const folder of folders) {
        const componentPath = path.join(REGISTRY_PATH, folder)
        const stat = await fs.stat(componentPath)

        if (!stat.isDirectory()) continue

        const files = await fs.readdir(componentPath)
        const componentFiles = []

        for (const file of files) {
            const filePath = path.join(componentPath, file)
            const content = await fs.readFile(filePath, "utf-8")

            componentFiles.push({
                name: file,
                content: content
            })
        }

        blocks[folder] = {
            name: folder,
            type: "components:block",
            files: componentFiles,
        }
    }


    const result = {
        version: "1.0.0",
        blocks: blocks,
    }

    if (!fs.existsSync(PUBLIC_PATH)) {
        fs.mkdirSync(PUBLIC_PATH)
    }

    await fs.writeFile(
        path.join(PUBLIC_PATH, "registry.json"),
        JSON.stringify(result, null, 2)
    )

    console.log("Registry generated at public/registry.json")
}

buildRegistry().catch((err) => {
    console.error(err)
    process.exit(1)
})
