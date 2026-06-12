import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' });
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

const repo = process.env.GITHUB_REPOSITORY; // owner/repo
const user = process.env.GITHUB_ACTOR;
const token = process.env.GITHUB_TOKEN;

if (!repo) {
  console.log('GITHUB_REPOSITORY not set. Manual deploy needs a git remote configured in your repo.');
}

console.log('Building before manual deploy...');
run(`cd "${projectRoot}" && npm run build`);

console.log('Deploying dist/ -> gh-pages via git worktree...');

// Use provided remote if possible
let remoteUrl = null;
if (repo && user && token) {
  remoteUrl = `https://${user}:${token}@github.com/${repo}.git`;
}

run(`cd "${projectRoot}" && git fetch --all --prune`);

// Create gh-pages branch locally if missing
try {
  run(`cd "${projectRoot}" && git show-ref --verify --quiet refs/heads/gh-pages`);
} catch {
  run(`cd "${projectRoot}" && git checkout -b gh-pages`);
}

// Switch to gh-pages
run(`cd "${projectRoot}" && git checkout gh-pages`);

// Remove everything in branch and copy dist
run(`cd "${projectRoot}" && git rm -r --ignore-unmatch .`);

// Copy dist contents into repo root
run(`cd "${projectRoot}" && xcopy /E /I /Y dist .`);

run(`cd "${projectRoot}" && git add -A`);
run(`cd "${projectRoot}" && git commit -m "Deploy portfolio" --allow-empty`);

if (remoteUrl) {
  run(`cd "${projectRoot}" && git push "${remoteUrl}" gh-pages --force`);
} else {
  run(`cd "${projectRoot}" && git push origin gh-pages --force`);
}

console.log('Manual deploy complete.');

