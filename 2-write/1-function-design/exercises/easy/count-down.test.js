// #todo

'use strict';

/**
 * builds an array counting down from `start` to 0
 * @param {number} [start=0] - the number to count down from
 *  start must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from `start` to 0
 */

// -------- your solutions --------
function countdown(start = 0) {
  if (!Number.isInteger(start) || start <= 0) {
    throw new Error('Start must be an integer greater than 0.');
  }

  const result = [];
  for (let i = start; i >= 0; i--) {
    result.push(i);
  }
  return result;
}

for (const solution of [secretSolution]) {
  // the main test suite for the function
  describe(solution.name + ': counts down to 0', () => {
    it('default parameter is 0 -> [0]', () => {
      expect(solution()).toEqual([0]);
    });
    it('0 -> [0]', () => {
      expect(solution(0)).toEqual([0]);
    });
    it('1 -> [1, 0]', () => {
      expect(solution(1)).toEqual([1, 0]);
    });
    // write at least 5 more tests ...
    it('for cuntdown to 10', () => {
      expect(solution(10)).toEqual([10,9,8,7,6,5,4,3,2,1,0]);
    });
    it('for cuntdown to 5', () => {
      expect(solution(10)).toEqual([5,4,3,2,1,0]);
    });
    it('for countdown 9', () => {
      expect(solution(9)).toEqual([9,8,7,6,5,4,3,2,1,0]);
    });
    it('throws a TypeError when start is not a positive integer', () => {
    expect(() => countdown()).toThrow(TypeError);
    it('throws a TypeError when start is  a decimal', () => {
    expect(() => countdown()).toThrow(TypeError);
  });
});

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = 0) { if ("number" != typeof a) throw new TypeError("start is not a number"); if (!Number.isInteger(a)) throw new Error("start is not an integer"); if (0 > a) throw new RangeError("start is less than 0"); const b = []; for (let c = a; 0 <= c; c--) b.push(c);return b }