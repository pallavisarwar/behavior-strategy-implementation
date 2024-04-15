// #todo

'use strict';

/**
 * reverses a string and sets all the characters to upper or lower case
 * @param {string} [text=''] - the text to reverse and casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the reversed text in all lower or upper case
 */

// -------- your solutions --------
function reverseAndCasify(text = '', lowerCase = true) {
  if (typeof text !== 'string') {
    throw new TypeError('The text parameter must be a string.');
  }

  const reversedText = text.split('').reverse().join('');

  if (lowerCase) {
    return reversedText.toLowerCase();
  } else {
    return reversedText.toUpperCase();
  }
}

for (const solution of [secretSolution]) {
  describe(
    solution.name + ': reverses a string then sets to lower or upper case',
    () => {
      describe("the function's default parameters", () => {
        it('second parameter defaults to true', () => {
          expect(solution('asdf')).toEqual('fdsa');
        });
        it('first parameter defaults to an empty string', () => {
          expect(solution()).toEqual('');
        });
      });
      // write the tests indicated by the comments
      describe('when set to lower case', () => {
        // when the text is an empty string
        it('empty string', () => {
          expect(solution('', true)).toEqual('');
        });
        // when the text is all upper case
        it('all uppercase', () => {
          expect(solution('HELLO', true)).toEqual('olleh');
        });
        // when the text is all lower case
        it('all lowercase', () => {
          expect(solution('hello', true)).toEqual('olleh');
        });
        // when the text is mixed upper and lower case
        it('mixed upper and lower case', () => {
          expect(solution('HelloWorld', true)).toEqual('dlrowolleh');
        });
        // when the text contains punctuation
        it('the text containing punctuation', () => {
          expect(solution('Hello, World!', true)).toEqual('!dlrow ,olleh');
        });
        // when the text contains numbers
        it('the text containing numbers', () => {
          expect(solution('Hello123', true)).toEqual('321olleh');
        });
      });
      describe('when set to upper case', () => {
        // when the text is an empty string
        it('empty string', () => {
          expect(solution('', false)).toEqual('');
        });
        // when the text is all upper case
        it('text with all upper case', () => {
          expect(solution('HELLO', false)).toEqual('OLLEH');
        });
        // when the text is all lower case
        it('text with all lower case', () => {
          expect(solution('hello', false)).toEqual('OLLEH');
        });
        // when the text is mixed upper and lower case
        it('text with mixed case', () => {
          expect(solution('HelloWorld', false)).toEqual('DLROWOLLEH');
        });
        // when the text contains punctuation
        it('text containing punctuation', () => {
          expect(solution('Hello, World!', false)).toEqual('!DLROW ,OLLEH');
        });
        // when the text contains numbers
        it('text containing numbers', () => {
          expect(solution('HelloWorld123', false)).toEqual('321DLROWOLLEH');
        });
      });
    }
  );
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; 0 <= d; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d }
