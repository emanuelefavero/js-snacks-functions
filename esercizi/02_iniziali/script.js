/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ['Anna', 'Luca', 'Marco', 'Adele', 'Giovanni', 'Alessandra'];

// Arrow
{
  const getInitials = names => names.map(name => name[0]);

  console.log(getInitials(names));
}

// Classic
{
  function getInitials(names) {
    const initials = [];

    for (let i = 0; i < names.length; i++) {
      initials.push(names[i][0]);
    }

    return initials;
  }

  console.log(getInitials(names));
}

// Output: ["A", "L", "M", "A", "G", "A"]
