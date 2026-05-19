/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';

// Arrow
{
  const greet = name => `Ciao ${name}`;

  console.log(greet(userName));
}

// Classic
{
  function greet(name) {
    return `Ciao ${name}`;
  }

  console.log(greet(userName));
}

// Output: Ciao Mario
