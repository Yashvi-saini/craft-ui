#!/usr/bin/env node
import { Command } from "commander"
import chalk from "chalk"
import fs from "fs-extra"
import path from "path"
import ora from "ora"
import fetch from "node-fetch"

const program = new Command()
const REGISTRY_URL =  "https://craft-ui-mocha.vercel.app/registry.json"

program
    .name("craft-ui")
    .description("Add components to your project")
    .version("0.1.0")

program
    .command("add")
    .argument("<component>", "the component to add")
    .action(async (componentName) => {
        const spinner = ora(`Installing ${componentName}...`).start()

        try {
            const response = await fetch(REGISTRY_URL)
            if (!response.ok) {
                throw new Error("Failed to fetch registry. Make sure your dev server is running on localhost:3000")
            }
            const registry = await response.json() as any

            const block = registry.blocks[componentName]

            if (!block) {
                spinner.fail(`Component "${componentName}" not found in registry.`)
                console.log(chalk.yellow("Available components:"), Object.keys(registry.blocks).join(", "))
                return
            }

            const targetDir = path.join(process.cwd(), "components", "craft-ui", componentName)
            await fs.ensureDir(targetDir)

            for (const file of block.files as any[]) {
                const targetPath = path.join(targetDir, file.name)
                await fs.writeFile(targetPath, file.content)
            }

            spinner.succeed(chalk.green(`Successfully installed ${componentName} at components/craft-ui/${componentName}`))

        } catch (error) {
            spinner.fail("Failed to install component.")
            console.error(error)
        }
    })

program.parse()
