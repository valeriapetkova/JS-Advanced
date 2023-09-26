const rentCar = require('./rentCar');
const { assert } = require('chai');

describe('rentCar object tests', () => {
    describe('searchCar function tests', () => {
        it('should return an error with invalid input', () => {
            assert.throws(() => rentCar.searchCar('str', 30), 'Invalid input!');
            assert.throws(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 30), 'Invalid input!');
            assert.throws(() => rentCar.searchCar(30, 'Audi'), 'Invalid input!');
        })
        it('should return the correct value', () => {
            assert.equal(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Audi'), 'There is 1 car of model Audi in the catalog!');
        })
        it('should return an error with empty array', () => {
            assert.throws(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 'Other car'), 'There are no such models in the catalog!');
        })
    });
    describe('calculatePriceOfCar function tests', () => {
        it('should return an error with invalid input', () => {
            assert.throws(() => rentCar.calculatePriceOfCar(30, 'str'), 'Invalid input!');
            assert.throws(() => rentCar.calculatePriceOfCar('Audi', 30.5), 'Invalid input!');
            assert.throws(() => rentCar.calculatePriceOfCar(25, 30), 'Invalid input!');
        })
        it('should return model and price of a car ', () => {
            assert.equal(rentCar.calculatePriceOfCar('Audi', 3), 'You choose Audi and it will cost $108!');
        })
        it('should return an error that no such model', () => {
            assert.throws(() => rentCar.calculatePriceOfCar('Some car', 7), 'No such model in the catalog!');
        })
    });
    describe('checkBudget function tests', () => {
        it('should return an error with invalid input', () => {
            assert.throws(() => rentCar.checkBudget('30', 6, 'str'), 'Invalid input!');
            assert.throws(() => rentCar.checkBudget(3000, 30.5, 5000), 'Invalid input!');
            assert.throws(() => rentCar.checkBudget(2500.50, 30, 5000), 'Invalid input!');
            assert.throws(() => rentCar.checkBudget(2500, 30, 5000.50), 'Invalid input!');
        })
        it('should return that the car is rent', () => {
            assert.equal(rentCar.checkBudget(500, 3, 1500), 'You rent a car!');
            assert.equal(rentCar.checkBudget(500, 3, 3000), 'You rent a car!');
        })
        it('should return that the budget have to be bigger', () => {
            assert.equal(rentCar.checkBudget(500, 3, 1000), 'You need a bigger budget!');
        })
    });
});