import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name){
    console.log(`HelloGreet ${name}`);
}

function goodbyeHandler(name){
    console.log(`HelloBye ${name}`);
}

myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

myEmitter.emit('greet', 'Pierpaolo');
myEmitter.emit('goodbye', 'Luca');

// Error Emit
myEmitter.on('error', (err)=>{
    console.log('Errore:', err);
})

// Simulo Errore
myEmitter.emit('error', new Error("Si è presentato un errore"));