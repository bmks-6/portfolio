/*
  Deploy React app to GitHub Pages.
  Requires:
   - gh-pages (auto-installed if missing)
   - optional GitHub token via env GITHUB_TOKEN

  Uses ES modules (this project has "type": "module").
*/

import { execSync } from 'node:child_process';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' });
}

const repo = process.env.GITHUB_REPOSITORY; // owner/repo
const user = process.env.GITHUB_ACTOR;
const token = process.env.GITHUB_TOKEN;

console.log('Running deploy to GitHub Pages (gh-pages branch)');

// Ensure dependencies present
try {
  require('gh-pages');
} catch {
  console.log('Installing gh-pages...');
  run('npm i -D gh-pages');
}

run('npm run build');

const ghpages = require('gh-pages');

// gh-pages expects `publish` to be a string path
const distDir = path.resolve('dist').toString();


const deployBranch = 'gh-pages';

const auth = token && user ? `${user}:${token}@` : '';

// If token not provided, gh-pages will still work when you already have git credentials.
const remote = repo
  ? `https://${auth}github.com/${repo}.git`
  : null;

const opts = {
  branch: deployBranch,
  // gh-pages version in this repo expects an actual filesystem path string
  publish: { dir: distDir },
};


if (remote) {
  opts.remoteUrl = remote;
}

ghpages.publish(opts, (err) => {
  if (err) {
    console.error('Deploy failed:', err);
    process.exit(1);
  }
  console.log('Deploy complete.');
});


