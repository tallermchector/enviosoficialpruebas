const fs = require('fs');

let file2 = 'src/app/ordenes/actions.ts';
let content2 = fs.readFileSync(file2, 'utf8');
content2 = content2.replace(/z\.nativeEnum\(PrismaServiceTypeEnum\)\s*\}\),/, 'z.nativeEnum(PrismaServiceTypeEnum),');
fs.writeFileSync(file2, content2);
console.log('Fixed actions.ts again');
