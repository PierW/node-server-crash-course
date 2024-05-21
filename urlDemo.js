import url from 'url';

console.log(import.meta.url);
console.log(url.fileURLToPath(import.meta.url));

const urlString = 'https://google.com/search?q=Hello+World';

const urlObj = new URL(urlString);
console.log(urlObj);
console.log(url.format(urlObj));

const params = new URLSearchParams(urlObj.search);
params.append('limit', '5');
params.delete('q');
console.log(params);