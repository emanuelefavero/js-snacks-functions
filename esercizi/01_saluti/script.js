/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';

// Arrow

const greet = (name) => `Ciao ${name}`;

console.log(greet('Mario')); // Ciao Mario

// Classic

function _greet(name) {
  return `Ciao ${name}`;
}

console.log(_greet('Anna')); // Ciao Anna
