import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function readDir(dirPath) {
  const items = await fs.readdir(dirPath, { withFileTypes: true });
  return Promise.all(items.map(async (item) => {
    if (item.isDirectory()) {
      return {
        name: item.name,
        type: 'folder',
        children: await readDir(path.join(dirPath, item.name))
      };
    } else {
      return {
        name: item.name,
        type: 'file'
      };
    }
  }));
}

const assetsPath = path.resolve(__dirname, '../assets/files');
const fileStructure = await readDir(assetsPath);

await fs.writeFile(
  path.resolve(__dirname, '../assets/file-structure.json'),
  JSON.stringify(fileStructure, null, 2)
);

console.log('File structure JSON generated successfully.');
