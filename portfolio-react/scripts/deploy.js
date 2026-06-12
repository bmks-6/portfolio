import ghpages from 'gh-pages'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execSync } from 'node:child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Build first
execSync('npm run build', { stdio: 'inherit' })

const repoRoot = path.resolve(__dirname, '..')

await ghpages.publish(path.join(repoRoot, 'dist'), {
  branch: 'gh-pages',
  repo: undefined,
  user: process.env.GH_USERNAME,
  password: process.env.GH_TOKEN
})

