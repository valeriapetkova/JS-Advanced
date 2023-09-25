const lookupChar = require('./charLookup');
const{ assert } = require('chai');

describe('lookupChar test function', () => {
    it('should return undefined if the first parameter is not a string', () => {
        assert.equal(lookupChar(10, 7), undefined);
        assert.equal(lookupChar(2,5, 7), undefined);
        assert.equal(lookupChar([], 7), undefined);
        assert.equal(lookupChar({}, 7), undefined);
        assert.equal(lookupChar(undefined, 7), undefined);
        assert.equal(lookupChar(null, 7), undefined);
    });
    it('should return undefined if the second parameter is not a an integer', () => {
        assert.equal(lookupChar('text', 7.9), undefined);
        assert.equal(lookupChar('text', []), undefined);
        assert.equal(lookupChar('text', {}), undefined);
        assert.equal(lookupChar('text', undefined), undefined);
        assert.equal(lookupChar('text', null), undefined);
        assert.equal(lookupChar('text', '12.8'), undefined);
    });
    it('should return undefined with wrong parameters types', () => {
        assert.equal(lookupChar(10, '7.9'), undefined);
    });
    it('should return Incorrect index if the index is over the string length', () => {
        assert.equal(lookupChar('text', 4), 'Incorrect index');
        assert.equal(lookupChar('text', 5), 'Incorrect index');
        assert.equal(lookupChar('text', -10), 'Incorrect index');
        assert.equal(lookupChar('', 7), 'Incorrect index');
    });
    it('should return Incorrect index if the index is a negative number', () => {
        assert.equal(lookupChar('text', -10), 'Incorrect index');
    });
    it('should return char of the given index', () => {
        assert.equal(lookupChar('text', 0), 't');
        assert.equal(lookupChar('text', 1), 'e');
    });
});