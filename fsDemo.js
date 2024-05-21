//import fs from 'fs';
import fs from 'fs/promises';

/* // Leggo file text.txt asincrono
fs.readFile('./text.txt', 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data);
});

// Leggo file text.txt sincrono
const readFile = fs.readFileSync('./text.txt', 'utf-8');
console.log(readFile);
 */


// Leggo file text.txt Promises 
// fs.readFile('./text.txt', 'utf-8')
//     .then((data) => {console.log(data)})
//     .catch((err) => {console.log(err)})

// Leggo file text.txt Async/Await
const readFile = async () => {
    try {
        const data = await fs.readFile('./text.txt', 'utf-8');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


// WRITE FILE
const writeFile = async () => {
    try {
        await fs.writeFile('./text.txt', 'Testo nuovo scritto');
        console.log('Scrivendo scritta...');
    } catch (error) {
        console.log(error);
    }
}

const appendFile = async () => {
    try {
        await fs.appendFile('./text.txt', '\nTesto appeso scritto');
        console.log('Appendendo scritta...');
    } catch (error) {
        console.log(error);
    }
}

writeFile();
appendFile();
readFile();