// This script is necessary only because `now` uses `yarn install` instead of `yarn install --production`

const fs = require('fs');
const packageJson = require('./package.json');

const newPackageJsonPath = 'package-clean.json';

const newPackageJson = { ...packageJson };
delete newPackageJson.devDependencies;
delete newPackageJson.scripts.prepare;

fs.writeFileSync(newPackageJsonPath, JSON.stringify(newPackageJson, null, 2));
