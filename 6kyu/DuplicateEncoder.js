// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

/*
The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:

"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("

Tests:

  Test.assertEquals(duplicateEncode("din"),"(((");
  Test.assertEquals(duplicateEncode("recede"),"()()()");
  Test.assertEquals(duplicateEncode("Success"),")())())","should ignore case");
  Test.assertEquals(duplicateEncode("(( @"),"))((");
*/

const UNIQUE = '(';
const DUPLICATE = ')';

function duplicateEncode(word = '') {
  if (!word) return '';

  const counters = {};
  const chars = word.split('').map(char => char.toLowerCase());

  chars.forEach(
    (char) => {
      counters[char] = (counters[char] || 0) + 1;
    },
  );

  const encoded = [];

  chars.forEach(
    (char) => {
      encoded.push(counters[char] > 1 ? DUPLICATE : UNIQUE);
    }
  );

  return encoded.join('');
}
