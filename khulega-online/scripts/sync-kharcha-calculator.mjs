/**
 * Copy kharcha-calculator source → public/kharcha-calculator for Vite dev & build.
 */
import { cp, mkdir, rm } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const srcDir = resolve(root, 'kharcha-calculator')
const destDir = resolve(root, 'public/kharcha-calculator')

const destPage = resolve(destDir, 'page')
await rm(destPage, { recursive: true, force: true })
await mkdir(destPage, { recursive: true })
await cp(resolve(srcDir, 'page'), destPage, { recursive: true })

console.log('Synced kharcha-calculator → public/kharcha-calculator')