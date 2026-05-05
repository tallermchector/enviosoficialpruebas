const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src/components');
let modifiedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Fix lucide-react imports
  if (content.includes('Instagram') || content.includes('Facebook') || content.includes('Twitter')) {
    content = content.replace(/import\s+\{([^}]*)\}\s+from\s+[\"']lucide-react[\"']/g, (match, imports) => {
        let newImports = imports;
        newImports = newImports.replace(/\bInstagram\b/g, 'Camera as Instagram');
        newImports = newImports.replace(/\bFacebook\b/g, 'Share2 as Facebook');
        newImports = newImports.replace(/\bTwitter\b/g, 'MessageCircle as Twitter');
        return `import {${newImports}} from \"lucide-react\"`;
    });
  }

  // Fix type: "spring" etc
  content = content.replace(/type:\s*[\"'](spring|tween|inertia)[\"'](?!(\s*as\s+(const|any)))/g, 'type: \"$1\" as any');
  
  // Fix ease: "easeOut" etc
  content = content.replace(/ease:\s*[\"'](easeOut|easeIn|easeInOut|linear)[\"'](?!(\s*as\s+(const|any)))/g, 'ease: \"$1\" as any');

  // Fix missing useRef arguments
  content = content.replace(/useRef<number>\(\)/g, 'useRef<number | undefined>(undefined)');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Modified ' + file);
    modifiedCount++;
  }
});
console.log('Modified ' + modifiedCount + ' files.');
