// #todo

'use strict';

/**
 * sums all numbery strings in an array of strings
 * returns 0 if the array is empty
 * it does not modify the original array (no side-effects)
 * @param {string[]} arr - the array of strings
 * @returns {number} the sum of all numbery strings
 */

// -------- your solutions --------
 function sumNumberyStrings(arr) {
  let sum = 0;
  for (const str of arr) {
    const num = Number(str);
    if (!isNaN(num)) {
      sum += num;
    }
  }
  return sum;
}
  

const mapFilterReduce = (arr) => {
  // these work, you need to pass them to the right array methods
  const isNotNaN = (entry) => !Number.isNaN(entry);
  const sumNumbers = (acc, next) => acc + next;
  const castToNumber = (entry) => Number(entry);

  // fill in the array methods and pass in the correct logic
  const sumOfNumberies = arr
    .map(castToNumber) // convert each string to a number
    .filter(isNotNaN)  // filter out non-numeric values
    .reduce(sumNumbers, 0); //sum the remaining values, starting from 0

  return sumOfNumberies;
};

// -------- your solutions --------

for (const solution of [
  secretSolution,
  // mapFilterReduce,
]) {
  describe(solution.name + ': sumNumberyStrings', () => {
    describe('checking different test cases', () => {
      it('returns 0 for an empty array', () => {
       const result = sumNumberyStrings([]);
            expect(result).toBe(0); 
      });
      it('returns 0 if there is no numbery strings', () => {
       const arr = ['a', 'b', 'c']
       const result = sumNumberyStrings(arr);
            expect(result).toBe(0); 
      });
      it('returns sum of the numbery strings', () => {
       const arr = [ 56, 'a', 8, 'b', 98, 5, 'c']
       const result = sumNumberyStrings(arr);
            expect(result).toBe(56 + 8 + 98 + 5); 
      });
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arr is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arr contains non-strings"); } const c = a.map(a => +a).filter(a => !Number.isNaN(a)).reduce((a, b) => a + b, 0); return c }
