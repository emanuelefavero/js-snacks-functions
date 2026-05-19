/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ['Anna', 'Luca', 'Marco', 'Adele', 'Laura', 'Alessandra'];

// Arrow
{
  const filterByInitial = (names, char) =>
    names.filter(name => name.startsWith(char));

  console.log(filterByInitial(names, 'A'));
}

// Classic
{
  function filterByInitial(names, char) {
    const result = [];

    for (const name of names) {
      if (name[0] === char) result.push(name);
    }

    return result;
  }

  console.log(filterByInitial(names, 'A'));
}

// Output (lettera A): ["Anna", "Adele", "Alessandra"]
