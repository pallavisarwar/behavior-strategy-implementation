// #todo

'use strict';

/**
 * takes an array of strings and returns a new array of numbers
 *  the new array contains all the numbery strings, cast to numbers
 * does not modify the argument (no side-effects)
 * @param {string[]} arrayOfStrings - the array of strings
 * @returns {number[]} an array containing only numbers, and not NaN
 * @example
 *  ['1', '2', 'e', '.'] // --> [1, 2]
 */

// -------- your solutions --------
  const numberyNumberify = (arr) => {
  const isNotNaN = (entry) => {
    return !Number.isNaN(entry);
  };
  const castToNumber = (entry) => {
    return Number(entry);
  };
  const allValidNumbers = arr.map((item) => castToNumber(item)).filter((item) => isNotNaN(item));

  return allValidNumbers;
};


for (const solution of [secretSolution]) {
  describe(solution.name + ': converts string array to numbers', () => {
    describe('converts array of strings to array of numbers', () => {
      it('array of strings -> array of numbers', () => {
      const input = ['1', '2', '3', '4', '5'];
    const expected = [1, 2, 3, 4, 5];
    expect(numberyNumberify(input)).toEqual(expected);  
      });
      it('ignores non-numeric strings and returns only numbers', () => {
      const input = ['1', 'a', '2', 'b', '3', 'c'];
    const expected = [1, 2, 3];
    expect(numberyNumberify(input)).toEqual(expected);  
    });
    it('returns an empty array if input array is empty', () => {
      const input = [];
    const expected = [];
    expect(numberyNumberify(input)).toEqual(expected); 
  });
  it('converts negative numbers represented as strings to numbers', () => {
      const input = ['-1', '-2', '-3'];
    const expected = [-1, -2, -3];
    expect(numberyNumberify(input)).toEqual(expected); 
  });
  it('handles floating point numbers represented as strings', () => {
    const input = ['1.5', '2.3', '3.7'];
    const expected = [1.5, 2.3, 3.7];
    expect(numberyNumberify(input)).toEqual(expected);
  });
});
});
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a) { if (!Array.isArray(a)) { throw new TypeError("arrayOfStrings is not an array"); } const b = a.some(a => "string" != typeof a); if (b) { throw new TypeError("arrayOfStrings contains non-strings"); } const c = a.map(a => +a), d = c.filter(a => !Number.isNaN(a)); return d }
