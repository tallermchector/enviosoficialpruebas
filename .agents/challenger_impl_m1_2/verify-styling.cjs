const fs = require('fs');
const path = require('path');

const tailwindConfigPath = path.resolve(__dirname, '../../tailwind.config.ts');
const globalsCssPath = path.resolve(__dirname, '../../src/app/globals.css');
const layoutPath = path.resolve(__dirname, '../../src/app/layout.tsx');

let allPassed = true;
const results = [];

function check(assertion, message) {
  if (assertion) {
    results.push({ name: message, status: 'PASS' });
  } else {
    results.push({ name: message, status: 'FAIL' });
    allPassed = false;
  }
}

console.log('--- STARTING VERIFICATION ---');

// 1. Check tailwind.config.ts
if (!fs.existsSync(tailwindConfigPath)) {
  console.error('tailwind.config.ts not found at ' + tailwindConfigPath);
  process.exit(1);
}

const tailwindContent = fs.readFileSync(tailwindConfigPath, 'utf8');

// Brand colors
const brandBlueRegex = /blue:\s*["']#0635A6["']/i;
const brandYellowRegex = /yellow:\s*["']#FFEC00["']/i;
const brandWhiteRegex = /white:\s*["']#FFFFFF["']/i;

check(brandBlueRegex.test(tailwindContent), 'brand.blue is exactly #0635A6 in tailwind.config.ts');
check(brandYellowRegex.test(tailwindContent), 'brand.yellow is exactly #FFEC00 in tailwind.config.ts');
check(brandWhiteRegex.test(tailwindContent), 'brand.white is exactly #FFFFFF in tailwind.config.ts');

// Font-bebas mapping
const fontBebasRegex = /bebas:\s*\[\s*["']var\(--font-bebas\)["']/;
check(fontBebasRegex.test(tailwindContent), 'font-bebas maps to var(--font-bebas) in tailwind.config.ts');

// 2. Check globals.css
if (!fs.existsSync(globalsCssPath)) {
  console.error('globals.css not found at ' + globalsCssPath);
  process.exit(1);
}

const globalsContent = fs.readFileSync(globalsCssPath, 'utf8');

// Custom CSS classes
const glassmorphismRegex = /\.glassmorphism\s*\{/;
const borderModernRegex = /\.border-modern\s*\{/;
const transitionStitchRegex = /\.transition-stitch\s*\{/;

check(glassmorphismRegex.test(globalsContent), '.glassmorphism class is defined in globals.css');
check(borderModernRegex.test(globalsContent), '.border-modern class is defined in globals.css');
check(transitionStitchRegex.test(globalsContent), '.transition-stitch class is defined in globals.css');

// 3. Check layout.tsx
if (!fs.existsSync(layoutPath)) {
  console.error('layout.tsx not found at ' + layoutPath);
  process.exit(1);
}

const layoutContent = fs.readFileSync(layoutPath, 'utf8');

// Google Fonts imports in layout
const antonImported = layoutContent.includes('Anton');
const bebasImported = layoutContent.includes('Bebas_Neue');
const interImported = layoutContent.includes('Inter');

check(antonImported && bebasImported && interImported, 'Anton, Bebas_Neue, and Inter are imported from next/font/google in layout.tsx');

// Fonts attached to layout body
const antonAttachedRegex = /anton\.variable/;
const bebasAttachedRegex = /bebas\.variable/;
const interAttachedRegex = /inter\.variable/;

check(antonAttachedRegex.test(layoutContent), 'anton.variable attached to body tag in layout.tsx');
check(bebasAttachedRegex.test(layoutContent), 'bebas.variable attached to body tag in layout.tsx');
check(interAttachedRegex.test(layoutContent), 'inter.variable attached to body tag in layout.tsx');

console.log('\n--- VERIFICATION RESULTS ---');
results.forEach(r => {
  console.log(`[${r.status}] ${r.name}`);
});

if (allPassed) {
  console.log('\nResult: PASS');
  process.exit(0);
} else {
  console.log('\nResult: FAIL');
  process.exit(1);
}
