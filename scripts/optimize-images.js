import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const dryRun = process.argv.includes('--dry-run');
const folders = ['public/images', 'public/menu'];

async function listImages(folder) {
  const entries = await fs.readdir(path.join(root, folder), { withFileTypes: true });
  return entries
    .filter((entry) => entry.isFile() && /\.(jpe?g|png)$/i.test(entry.name))
    .map((entry) => path.join(root, folder, entry.name));
}

function maxDimension(filePath) {
  const name = path.basename(filePath).toLowerCase();
  if (name.endsWith('.png')) return 500;
  if (name === 'hero-cake.jpg' || name === 'about-knead.jpg') return 1440;
  if (name === 'menu-flyer.jpg') return 1200;
  if (name === 'logo.jpg') return 600;
  if (name.startsWith('cat-')) return 720;
  return 850;
}

let beforeBytes = 0;
let afterBytes = 0;
let processed = 0;

for (const folder of folders) {
  const images = await listImages(folder);
  for (const filePath of images) {
    const original = await fs.readFile(filePath);
    beforeBytes += original.length;
    const image = sharp(original)
      .rotate()
      .resize({ width: maxDimension(filePath), height: maxDimension(filePath), fit: 'inside', withoutEnlargement: true });
    const output = /\.png$/i.test(filePath)
      ? await image.png({ quality: 75, compressionLevel: 9, palette: true, effort: 10 }).toBuffer()
      : await image.jpeg({ quality: 78, mozjpeg: true, progressive: true }).toBuffer();
    const result = output.length < original.length ? output : original;
    afterBytes += result.length;
    if (!dryRun && result !== original) await fs.writeFile(filePath, result);
    processed += 1;
    console.log(`${dryRun ? 'Would optimize' : 'Optimized'} ${path.relative(root, filePath)}: ${original.length} -> ${result.length} bytes`);
  }
}

console.log(`${dryRun ? 'Dry run' : 'Complete'}: ${processed} images, ${(beforeBytes / 1024 / 1024).toFixed(2)} MB -> ${(afterBytes / 1024 / 1024).toFixed(2)} MB${dryRun ? ' (no files changed)' : ''}`);
