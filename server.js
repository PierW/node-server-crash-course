import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

// Utiliti (In CommonJS ma in EsModule no, quindi le creiamo con i moduli url e path nativi di node)
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT;

const server = http.createServer(async (req, res) => {

    try {
        if (req.method === 'GET') {
            let filePath;
            if (req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html');
                const data = await fs.readFile(filePath);
                res.setHeader('Content-Type', 'text/html');
                res.statusCode = 200;
                res.write(data);
                res.end();
            } else if(req.url === '/posts'){
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                res.write(JSON.stringify({ message: 'Posts'}));
                res.end();
            } else {
                res.setHeader('Content-Type', 'text/html');
                res.statusCode = 404;
                res.write('<h1>Route non trovata</h1>');
                res.end();
            }
        } else {
            throw new Error('Metodo non consentito');
        }
    } catch (error) {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 500;
        res.write('Server Error');
        res.end();
    }

})

server.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${ PORT }`);
})