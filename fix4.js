const fs = require('fs');

let file1 = 'src/app/admin/cotizaciones/actions.ts';
let content1 = fs.readFileSync(file1, 'utf8');
content1 = content1.replace(/z\.nativeEnum\(ServiceTypeEnum,\s*\{[^}]+\}\)/, 'z.nativeEnum(ServiceTypeEnum)');
fs.writeFileSync(file1, content1);

let file2 = 'src/app/ordenes/actions.ts';
let content2 = fs.readFileSync(file2, 'utf8');
content2 = content2.replace(/z\.nativeEnum\(PrismaServiceTypeEnum,\s*\{[^}]+\}\)/, 'z.nativeEnum(PrismaServiceTypeEnum)');
content2 = content2.replace(/z\.coerce\.date\(\{ invalid_type_error: [^}]+\} \)/g, 'z.coerce.date()');
content2 = content2.replace(/z\.coerce\.date\(\{\s*invalid_type_error:\s*\"[^\"]+\"\s*\}\)/g, 'z.coerce.date()');
fs.writeFileSync(file2, content2);
console.log('Fixed cotizaciones and ordenes actions');
