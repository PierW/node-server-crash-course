// Più pulito con richiesta POST per inserire utente e Middleware.

import { createServer } from 'http';
const PORT = process.env.PORT;


const users = [
    {id: 1, name: "Pippo"},
    {id: 2, name: "Pluto"},
    {id: 3, name: "Peppe"}
];

// Logger Middleware
const logger = (req,res,next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const server = createServer((req, res) => {
    // Middleware
    logger(req,res,() => {
        if (req.url === '/api/users' && req.method === 'GET') {
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.write(JSON.stringify(users));
            res.end();
        } else if(req.method === 'GET' && req.url.match(/\/api\/users\/([0-9]+)/)){
            const id = req.url.split('/')[3];
            const user = users.find((user) => {
                return user.id === parseInt(id);
            });
            if(user){
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                res.write(JSON.stringify(user));
            } else{
                res.setHeader('Content-Type', 'text/html');
                res.statusCode = 404;
                res.write('<h1>Route non trovata</h1>');
            }
            res.end();
         } else if(req.method === 'POST' && req.url === '/api/users'){
            let body = '';
            req.on('data', (chunk) => {
                body += chunk.toString();
            });
            req.on('end', () => {
                const newUser = JSON.parse(body);
                users.push(newUser);
                res.statusCode = 201;
                res.write(JSON.stringify(newUser));
                res.end();
            });
         }
        else {
            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 404;
            res.write('<h1>Route non trovata</h1>');
            res.end();
        }
    });
});


server.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${ PORT }`);
})