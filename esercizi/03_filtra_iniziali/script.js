/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ['Anna', 'Luca', 'Marco', 'Adele', 'Laura', 'Alessandra'];

// Arrow
{
  const filterByInitial = (names, letter) => {
    const result = [];
    const lowerCaseLetter = letter.charAt(0).toLowerCase();

    for (const name of names) {
      const firstLetter = name.charAt(0).toLowerCase();
      if (firstLetter === lowerCaseLetter) result.push(name);
    }

    return result;
  };

  console.log(filterByInitial(names, 'A'));
}

// Classic
{
  function filterByInitial(names, letter) {
    const result = [];
    const lowerCaseLetter = letter.charAt(0).toLowerCase();

    for (const name of names) {
      const firstLetter = name.charAt(0).toLowerCase();
      if (firstLetter === lowerCaseLetter) result.push(name);
    }

    return result;
  }

  console.log(filterByInitial(names, 'A'));
}

// Output (lettera A): ["Anna", "Adele", "Alessandra"]
