// https://www.codewars.com/kata/mylanguages/train

/*
  Your task
  Given a dictionary/hash/object of languages and your respective test results,
  return the list of languages where your test score is at least 60, in descending order of the results.

  Note: There will be no duplicate values.

  Examples:
    {"Java": 10, "Ruby": 80, "Python": 65}  --> ["Ruby", "Python"]
    {"Hindi": 60, "Dutch" : 93, "Greek": 71} --> ["Dutch", "Greek", "Hindi"]
    {"C++": 50, "ASM": 10, "Haskell": 20}   --> []
*/

const SCORE_LIMIT = 60;

function myLanguages(results = {}) {
  const list = [];

  Object.entries(results).forEach(
      ([lng, score]) => { 
      if (score >= SCORE_LIMIT) list.push(lng); 
    },
  );
  
  return list.sort((a, b) => results[a] < results[b] ? 1 : -1);
}
