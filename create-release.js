import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { Octokit } from '@octokit/rest';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentFilePath);

const releaseVersion = process.env.GITHUB_REF.split('/').pop();
const branchName = 'main'; // Specify the main branch name

// Create and switch to a new branch
execSync(`git checkout -b ${branchName}`);

// Fetch release notes using GitHub API
const octokit = new Octokit();

const { data: releases } = await octokit.repos.listReleases({
  owner: 'MJGT-Studio',
  repo: 'MasterInventoryDocs',
});

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
