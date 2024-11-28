const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

function calculateHash(filePath) {
    const fileBuffer = fs.readFileSync(filePath);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);
    return hashSum.digest('hex');
}

function generateBuildManifest(directory) {
    const manifest = {};
    function processDirectory(dir) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const fullPath = path.join(dir, file);
            if (fs.statSync(fullPath).isDirectory()) {
                processDirectory(fullPath);
            } else {
                const relativePath = path.relative('out', fullPath);
                manifest[relativePath] = calculateHash(fullPath);
            }
        });
    }
    processDirectory(directory);
    return manifest;
}

// Generate and save manifest
const manifest = generateBuildManifest('out');
fs.writeFileSync('build-manifest.json', JSON.stringify(manifest, null, 2));
console.log('Build manifest generated successfully');