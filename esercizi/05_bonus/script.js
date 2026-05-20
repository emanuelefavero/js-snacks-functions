/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

// Arrow
{
  const greet = name => {
    const hour = new Date().getHours();
    let greeting = '';

    if (hour <= 13) greeting = 'Buongiorno';
    else if (hour <= 17) greeting = 'Buon pomeriggio';
    else greeting = 'Buonasera';

    return `${greeting} ${name}.`;
  };

  console.log(greet(name));
}

// Classic
{
  function greet(name) {
    const hour = new Date().getHours();

    const greeting =
      (hour <= 13 && 'Buongiorno') ||
      (hour <= 17 && 'Buon pomeriggio') ||
      'Buonasera';

    return `${greeting} ${name}.`;
  }

  console.log(greet(name));
}

// Output (alle 18): "Buonasera Mario."
