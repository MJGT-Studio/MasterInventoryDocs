import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFilePath);

const releaseVersion = process.env.GITHUB_REF.split('/').pop();

const releaseInfo = `
# Release ${releaseVersion}

Add your release notes here.
`;

const filePath = path.join(currentDir, 'src/content/blog', `release-${releaseVersion}.md`);

fs.writeFileSync(filePath, releaseInfo.trim());

execSync(`git add ${filePath}`);
execSync(`git commit -m "Add release notes for version ${releaseVersion}"`);
execSync('git push');
