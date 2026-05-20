/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Arrow
{
  const countVowels = word => {
    const vowels = 'aeiou';
    let count = 0;

    for (const char of word) {
      const lowerCaseChar = char.toLowerCase();
      if (vowels.includes(lowerCaseChar)) count++;
    }

    return count;
  };

  console.log(countVowels(word));
}

// Classic
{
  function countVowels(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (const char of word) {
      const lowerCaseChar = char.toLowerCase();

      let isVowel = false;

      for (const vowel of vowels) {
        if (vowel === lowerCaseChar) {
          isVowel = true;
          break;
        }
      }

      if (isVowel) count++;
    }

    return count;
  }

  console.log(countVowels(word));
}

// Output: 3 (a, a, i)
