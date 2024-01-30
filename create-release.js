const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const releaseVersion = process.env.GITHUB_REF.split('/').pop();

const releaseInfo = `
# Release ${releaseVersion}

Add your release notes here.
`;

const filePath = path.join(__dirname, 'src/content/blog', `release-${releaseVersion}.md`);

fs.writeFileSync(filePath, releaseInfo.trim());

execSync(`git add ${filePath}`);
execSync(`git commit -m "Add release notes for version ${releaseVersion}"`);
execSync('git push');
