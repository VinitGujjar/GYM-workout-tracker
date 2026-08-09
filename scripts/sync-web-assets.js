const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const webDir = path.join(root, 'www');
const files = [
  'index.html',
  'favicon.png',
  'README.md',
  'HELP.md',
  'PRIVACY.md',
  'CHANGELOG.md'
];

fs.mkdirSync(webDir, { recursive: true });

for (const file of files) {
  const source = path.join(root, file);
  if (!fs.existsSync(source)) continue;
  fs.copyFileSync(source, path.join(webDir, file));
}

console.log(`Synced ${files.filter((file) => fs.existsSync(path.join(root, file))).length} web asset(s) to ${webDir}`);
