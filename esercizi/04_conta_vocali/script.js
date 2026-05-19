/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Arrow
{
  const countVowels = word => {
    const vowels = 'aeiou';
    let count = 0;

    for (const char of word) {
      if (vowels.includes(char)) count++;
    }

    return count;
  };

  console.log(countVowels(word));
}

// Classic
{
  function countVowels(word) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;

    for (const char of word) {
      if (vowels.has(char)) count++;
    }

    return count;
  }

  console.log(countVowels(word));
}

// Output: 3 (a, a, i)
