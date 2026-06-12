import { execSync } from 'node:child_process'

execSync('npm run build', { stdio: 'inherit' })
execSync('npx gh-pages -d dist', { stdio: 'inherit' })


