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

// Set Git user information
execSync('git config user.email "mariojgt2@gmail.com"');
execSync('git config user.name "Mario Tarosso"');

execSync(`git add ${filePath}`);
execSync(`git commit -m "Add release notes for version ${releaseVersion}"`);

// Push the changes to the new branch
execSync(`git push origin main`);
