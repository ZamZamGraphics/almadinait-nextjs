// scripts/generate-image-data.js
const { imageSize } = require('image-size');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/gallery');
const files = fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

const data = files.map(file => {
    const filePath = path.join(dir, file);
    const buffer = fs.readFileSync(filePath);
    const { width, height } = imageSize(buffer);
    const alt = path.parse(file).name;
    return { src: `/gallery/${file}`, width, height, alt };
});

fs.writeFileSync(
    path.join(__dirname, '../lib/gallery-images.json'),
    JSON.stringify(data, null, 2)
);

console.log(`${files.length}টা ইমেজের data generate হয়েছে`);