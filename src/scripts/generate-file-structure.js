import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function readDir(dirPath, basePath) {
  const items = await fs.readdir(dirPath, { withFileTypes: true });
  return Promise.all(items.map(async (item) => {
    const fullPath = path.join(dirPath, item.name);
    const relativePath = path.relative(basePath, fullPath);
    if (item.isDirectory()) {
      return {
        name: item.name,
        type: 'folder',
        path: relativePath,
        children: await readDir(fullPath, basePath)
      };
    } else {
      return {
        name: item.name,
        type: 'file',
        path: relativePath
      };
    }
  }));
}

const assetsPath = path.resolve(__dirname, '../assets/files');
const fileStructure = await readDir(assetsPath, assetsPath);

await fs.writeFile(
  path.resolve(__dirname, '../assets/file-structure.json'),
  JSON.stringify(fileStructure, null, 2)
);

console.log('File structure JSON generated successfully.');
