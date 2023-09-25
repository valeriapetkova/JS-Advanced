const isOddOrEven = require('./oddAndEven');
const { assert } = require('chai');

describe('isOddOrEven function tests', () => {
    //invalid input tests
    it('should return undefined if the passed parameter is not a string', () => {
        assert.equal(isOddOrEven(7), undefined);
        assert.equal(isOddOrEven([]), undefined);
        assert.equal(isOddOrEven({}), undefined);
        assert.equal(isOddOrEven(undefined), undefined);
    });
    //valid input tests
    it('should return even if the length of the string is even', () => {
        assert.equal(isOddOrEven('JS'), 'even');
    });
    it('should return odd if the length of the string is odd', () => {
        assert.equal(isOddOrEven('SoftUni'), 'odd');
    });
});