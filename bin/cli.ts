import Handlebars from 'handlebars'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { globby } from 'globby'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const argv = yargs(hideBin(process.argv))
    .scriptName('templater')
    .usage('$0 --package-name=@namespace/name --component-name=my-webcomponent')
    .help()
    .argv

const { _, ...templateParams } = argv

// example files
const exampleFilePaths = await globby(path.join(__dirname, '..', 'example', '*'))
const exampleFiles = await Promise.all(exampleFilePaths.map(filepath => {
    return fs.readFile(filepath)
}))

exampleFiles.forEach(async (fileContent, i) => {
    const template = Handlebars.compile(fileContent)
    await fs.writeFile(exampleFilePaths[i], template(templateParams))
})

// src
const srcFiles = await Promise.all(
    (await globby(path.join(__dirname, '..', 'src', '*'))).map(filepath => {
        return fs.readFile(filepath)
    })
)

srcFiles.forEach(async (fileContent, i) => {
    const template = Handlebars.compile(fileContent)
    await fs.writeFile(srcFiles[i], template(templateParams))
})

// tests
const testFilePath = path.join(__dirname, '..', 'test', 'index.ts')
const testFile = await fs.readFile(testFilePath)
const testTemplate = Handlebars.compile(testFile)
await fs.writeFile(testFilePath, testTemplate(templateParams))
