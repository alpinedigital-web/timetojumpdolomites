// Strip nl, fr, pl, es, cs translations from translations.js
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'public', 'js', 'translations.js');
let content = fs.readFileSync(file, 'utf-8');

// 1. Replace LANGUAGES array
content = content.replace(
  /const LANGUAGES = \[[\s\S]*?\];/,
  `const LANGUAGES = [
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
  { code: 'it', flag: '🇮🇹', label: 'Italiano' },
  { code: 'lad', flag: '🏔️', label: 'Ladin' }
];`
);

// 2. Remove ", nl: '...'" patterns from single-line entries
// These use escaped single-quotes like \\' inside
const langs = ['nl', 'fr', 'pl', 'es', 'cs'];
for (const lang of langs) {
  // Single-line: , nl: 'text with \' escapes'
  const singleLineRegex = new RegExp(`,\\s*${lang}:\\s*'(?:[^'\\\\]|\\\\.)*'`, 'g');
  content = content.replace(singleLineRegex, '');
  
  // Multi-line: standalone lines like "    nl: 'text',"
  const multiLineRegex = new RegExp(`^\\s*${lang}:\\s*'(?:[^'\\\\]|\\\\.)*',?\\s*\\r?\\n`, 'gm');
  content = content.replace(multiLineRegex, '');
}

// 3. Update the header comment
content = content.replace(
  /9 Languages: EN, DE, IT, LAD, NL, FR, PL, ES, CS/,
  '4 Languages: EN, DE, IT, LAD'
);

fs.writeFileSync(file, content, 'utf-8');

// Count remaining language entries to verify
const nlCount = (content.match(/\bnl:/g) || []).length;
const frCount = (content.match(/\bfr:/g) || []).length;
const plCount = (content.match(/\bpl:/g) || []).length;
const esCount = (content.match(/\bes:/g) || []).length;
const csCount = (content.match(/\bcs:/g) || []).length;

console.log(`Remaining: nl=${nlCount}, fr=${frCount}, pl=${plCount}, es=${esCount}, cs=${csCount}`);
console.log('Done! File saved.');
