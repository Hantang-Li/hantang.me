// Generates public/og.png (the social share card). Run: node scripts/og.mjs
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#f6f8f5"/>
  <rect x="80" y="80" width="84" height="84" rx="16" fill="#2a856e"/>
  <text x="122" y="143" font-size="56" text-anchor="middle" fill="#ffffff" font-family="SimSun, 'Songti SC', serif" font-weight="700">唐</text>
  <text x="80" y="330" font-size="96" fill="#1a2b26" font-family="Georgia, serif">Hantang Li</text>
  <text x="80" y="400" font-size="38" fill="#5c7069" font-family="Georgia, serif" font-style="italic">Generative AI &amp; infrastructure</text>
  <text x="80" y="540" font-size="26" fill="#2a856e" font-family="Consolas, monospace">hantang.me</text>
  <text x="1120" y="540" font-size="26" fill="#6a7d76" text-anchor="end" font-family="Consolas, monospace">Software Engineer · Toronto</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og.png');
console.log('wrote public/og.png');
