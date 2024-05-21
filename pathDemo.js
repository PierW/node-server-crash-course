import path from 'path';
import url from 'url';

const filePath = './dir1/dir2/text.txt';

// BaseName
console.log(path.basename(filePath));

// ExtName
console.log(path.extname(filePath));

// Dirname
console.log(path.dirname(filePath));

// Parse
console.log(path.parse(filePath));


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);


// JOIN()
const filePath2 = path.join(__dirname, 'dir2', 'dir3', 'text.txt');
console.log(filePath2);

// RESOLVE()
const filePath3 = path.resolve(__dirname, 'dir2', 'dir3', 'text.txt');
console.log(filePath3);