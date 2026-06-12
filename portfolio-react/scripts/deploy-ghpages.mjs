import { execSync } from 'node:child_process'

// Uses gh-pages under the hood (gh-pages package invoked by deploy.js)
// This file exists to keep the project structure conventional.
// Actual deployment command is executed by scripts/deploy.js.

try {
  execSync('echo "deploy-ghpages.mjs is present"', { stdio: 'inherit' })
} catch (e) {
  process.exit(1)
}

