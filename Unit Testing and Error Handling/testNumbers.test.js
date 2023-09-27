const testNumbers = require('./testNumbers');
const { assert } = require('chai');

describe('testNumbers object tests', () => {
    describe('sumNumbers function tests', () => {
        it('should return undefined with invalid parameters', () => {
            assert.equal(testNumbers.sumNumbers('10', '20'), undefined);
            assert.equal(testNumbers.sumNumbers(10, '20'), undefined);
            assert.equal(testNumbers.sumNumbers('10', 20), undefined);
        });
        it('should return sum of two numbers', () => {
            assert.equal(testNumbers.sumNumbers(10, 20), 30.00);
            assert.equal(testNumbers.sumNumbers(-10, 20), 10.00);
            assert.equal(testNumbers.sumNumbers(20, -10), 10.00);
            assert.equal(testNumbers.sumNumbers(-20, -10), -30.00);
            assert.equal(testNumbers.sumNumbers(-20.5, 10.5), -10.00);
        });
    });
    describe('numberChecker function tests', () => {
        it('should return an error with input = NaN', () => {
            assert.throws(() => testNumbers.numberChecker(NaN), 'The input is not a number!');
        });
        it('should return that the number is even', () => {
            assert.equal(testNumbers.numberChecker(10), 'The number is even!');
            assert.equal(testNumbers.numberChecker(-20), 'The number is even!');
        });
        it('should return that the number is odd', () => {
            assert.equal(testNumbers.numberChecker(11), 'The number is odd!');
            assert.equal(testNumbers.numberChecker(-21), 'The number is odd!');
            assert.equal(testNumbers.numberChecker(-21.3), 'The number is odd!');
            assert.equal(testNumbers.numberChecker(21.4), 'The number is odd!');
        });
    });
    describe('averageSumArray function tests', () => {
        it('should return average sum of the array', () => {
            assert.equal(testNumbers.averageSumArray([10, 20, 30, 60]), 30);
            assert.equal(testNumbers.averageSumArray([10.5, 20, 30.5, 60]), 30.25);
            assert.equal(testNumbers.averageSumArray([10.5, 20, 30.5, 60, -20]), 20.2);
        });
    });
});