import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

function run(cmd) {
  execSync(cmd, { stdio: 'inherit' });
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const repo = process.env.GITHUB_REPOSITORY; // owner/repo (optional)
const user = process.env.GITHUB_ACTOR;
const token = process.env.GITHUB_TOKEN;

console.log('Deploying React dist/ to GitHub Pages (gh-pages)');

// Ensure gh-pages exists
try {
  require.resolve('gh-pages');
} catch {
  run(`cd "${projectRoot}" && npm i -D gh-pages`);
}

// Build
run(`cd "${projectRoot}" && npm run build`);

const ghpages = (await import('gh-pages')).default;
const distDir = path.resolve(projectRoot, 'dist');

const deployBranch = 'gh-pages';
const auth = token && user ? `${user}:${token}@` : '';
const remote = repo ? `https://${auth}github.com/${repo}.git` : undefined;

// For gh-pages@6.x, use: publish: [{...}] is not supported everywhere.
// We pass a directory through the `publish` option as {dir: ...}.
const opts = {
  branch: deployBranch,
  publish: distDir,
};


if (remote) {
  opts.remoteUrl = remote;
}


// gh-pages API differs slightly across versions.
// In many versions, the imported default has `.publish`.
if (ghpages && typeof ghpages.publish === 'function') {
  ghpages.publish(opts, (err) => {
    if (err) {
      console.error('Deploy failed:', err);
      process.exit(1);
    }
    console.log('Deploy complete.');
  });
} else {
  console.error('Unsupported gh-pages module shape. Missing ghpages.publish');
  process.exit(1);
}


