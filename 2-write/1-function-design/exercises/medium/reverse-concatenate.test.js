// #todo

'use strict';

/**
 * A function that takes an array of strings, reverses it, and combines the strings
 * it does not modify the original array
 * @param {string[]} arrayOfStrings - an array of strings to concatenate, in reverse order
 * @returns {string} - the array elements joined together, in reverse order
 */

// -------- your solutions --------
function reverseAndCombine(arrayOfStrings) {
  // Create a copy of the original array to avoid modifying it
  const reversedArray = arrayOfStrings.slice().reverse();
  // Join the strings in the reversed array
  return reversedArray.join('');
}

for (const solution of [secretSolution]) {
  describe(solution.name + ': reverse and combine', () => {
    describe('test cases', () => {
      it('reverses and combine an array of strings', () => {
      const inputArray = ['hello', 'world', '!'];
      const expectedResult = '!worldhello';
      expect(solution(inputArray)).toEqual(expectedResult); 
      });

      it('does not modify the original array', () => {
      const inputArray = ['hello', 'world', '!'];
      const copiedArray = inputArray.slice(); // Create a copy of the original array
      solution(inputArray); // Call the function
      expect(inputArray).toEqual(copiedArray); // Check if the original array is unchanged
    });
    
    it('works with an empty array', () => {
      const inputArray = [];
      const expectedResult = '';
      expect(solution(inputArray)).toEqual(expectedResult);
    });

    it('works with an array containing a single string', () => {
      const inputArray = ['hello'];
      const expectedResult = 'hello';
      expect(solution(inputArray)).toEqual(expectedResult);
    });

    it('works with an array containing multiple empty strings', () => {
      const inputArray = ['', '', ''];
      const expectedResult = '';
      expect(solution(inputArray)).toEqual(expectedResult);
    });
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings does not contain only strings"); } return [...a].reverse().reduce((a, b) => a + b, "") }
