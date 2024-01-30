import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFilePath);

const releaseVersion = process.env.GITHUB_REF.split('/').pop();
const branchName = 'main'; // Specify the main branch name

// Create and switch to a new branch
execSync(`git checkout -b ${branchName}`);

// Fetch release notes using GitHub API
const owner = 'MJGT-Studio';
const repo = 'MasterInventoryDocs';

const releasesResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases`);
if (!releasesResponse.ok) {
  console.error(`Failed to fetch releases. Status: ${releasesResponse.status}`);
  process.exit(1);
}

const releases = await releasesResponse.json();
const release = releases.find((r) => r.tag_name === releaseVersion);

if (!release) {
  console.error(`Release ${releaseVersion} not found.`);
  process.exit(1);
}

const releaseNotes = release.body;
const today = new Date().toISOString().slice(0, 10);

const releaseInfo = `---
title: 'Release ${releaseVersion}'
description: '${releaseNotes}'
pubDate: '${today}'
coverImage: '/path/to/your/cover/image.jpg'
category: 'design'
---

${releaseNotes}
`;

const filePath = path.join(currentDir, 'src/content/blog', `release-${releaseVersion}.md`);

fs.writeFileSync(filePath, releaseInfo.trim());

// Set Git user information
execSync('git config user.email "mariojgt2@gmail.com"');
execSync('git config user.name "Mario Tarosso"');

execSync(`git add ${filePath}`);
execSync(`git commit -m "Add release notes for version ${releaseVersion}"`);

// Push the changes to the new branch
execSync(`git push origin ${branchName}`);
