// #todo

'use strict';

/**
 * sets all the characters in a string to upper or lower case
 * @param {string} [text=''] - the text to casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the text in all lower or upper case
 */

// -------- your solutions --------
function casifyText(text = '', lowerCase = true) {
  if (typeof text !== 'string') {
    throw new TypeError('The text parameter must be a string.');
  }

  if (lowerCase) {
    return text.toLowerCase();
  } else {
    return text.toUpperCase();
  }
}


for (const solution of [secretSolution]) {
  describe(solution.name + ': sets a text to lower or upper case', () => {
    describe("the function's default parameters", () => {
      it('second parameter defaults to true', () => {
        expect(solution('asdf')).toEqual('asdf');
      });
      it('first parameter defaults to an empty string', () => {
        expect(solution()).toEqual('');
      });
    });
    // write the tests indicated by the comments
    describe('when set to lower case', () => {
      // when the text is an empty string
      it('for empty string', () => {
        expect(solution('',true)).toEqual('');
      });
      // when the text is all upper case
      it('for the text is all upper case', () => {
        expect(solution('HELLO',true)).toEqual('hello');
      });
      // when the text is all lower case
      it('for the text is all lower case', () => {
        expect(solution('hello',true)).toEqual('hello');
      });
      // when the text is mixed upper and lower case
      it('for the text is mixed case', () => {
        expect(solution('HelloWorld',true)).toEqual('helloworld');
      });
      // when the text contains punctuation
      it('for the text containing punctuation', () => {
        expect(solution('Hello, World!',true)).toEqual('hello, world!');
      });
      // when the text contains numbers
      it('for the text containing numbers', () => {
        expect(solution('Pallavi123',true)).toEqual('pallavi123');
      });
    });
    describe('when set to upper case', () => {
      // when the text is an empty string
      it('for empty string', () => {
        expect(solution('',false)).toEqual('');
      });
      // when the text is all upper case
      it('for the text is all upper case', () => {
        expect(solution('HELLO',false)).toEqual('HELLO');
      });
      // when the text is all lower case
      it('for the text is all lower case', () => {
        expect(solution('hello',false)).toEqual('HELLO');
      });
      // when the text is mixed upper and lower case
      it('for the text is mixed case', () => {
        expect(solution('HelloWorld',false)).toEqual('HELLOWORLD');
      });
      // when the text contains punctuation
      it('for the text containig punctuation', () => {
        expect(solution('Hello, World!',false)).toEqual('HELLO, WORLD!');
      });
      // when the text contains numbers
      it('for the text containing numbers', () => {
        expect(solution('Pallavi123',false)).toEqual('PALLAVI123');
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; return c = b ? a.toLowerCase() : a.toUpperCase(), c }
