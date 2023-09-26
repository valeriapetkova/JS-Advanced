const carService = require('./carService');
const { assert } = require('chai');

describe('carService object test', () => {
    describe('isItExpensive function tests', () => {
        it('should return that the car will cost more money', () => {
            assert.equal(carService.isItExpensive('Engine'), 'The issue with the car is more severe and it will cost more money');
            assert.equal(carService.isItExpensive('Transmission'), 'The issue with the car is more severe and it will cost more money');
        });
        it('should return that the car will be a bit cheaper', () => {
            assert.equal(carService.isItExpensive('Other'), 'The overall price will be a bit cheaper');
        });

    });
    describe('discount function tests', () => {
        it('should return an error', () => {
            assert.throws(() => carService.discount('20', 20), 'Invalid input');
            assert.throws(() => carService.discount(10, '30'), 'Invalid input');
            assert.throws(() => carService.discount('10', '30'), 'Invalid input');
        });
        it('should return that the car will be a bit cheaper', () => {
            assert.equal(carService.discount(3, 20), 'Discount applied! You saved 3$');
            assert.equal(carService.discount(7, 20), 'Discount applied! You saved 3$');
            assert.equal(carService.discount(8, 70), 'Discount applied! You saved 21$');
            assert.equal(carService.discount(1, 10), 'You cannot apply a discount');
            assert.equal(carService.discount(2, 15), 'You cannot apply a discount');
        });

    });
    describe('partsToBuy function tests', () => {
        it('should return an error', () => {
            let arr1 = [{ part: "blowoff valve", price: 145}, { part: "coil springs", price: 230 }];
            let arr2 = ["blowoff valve", "injectors"];
            assert.throws(() => carService.partsToBuy(10, 20), 'Invalid input');
            assert.throws(() => carService.partsToBuy(arr1, '30'), 'Invalid input');
            assert.throws(() => carService.partsToBuy('str', arr2), 'Invalid input');
        });
        it('should return the total sum', () => {
            let arr1 = [{ part: "blowoff valve", price: 145}, { part: "coil springs", price: 230 }];
            let arr2 = ["blowoff valve", "injectors"];
            assert.equal(carService.partsToBuy(arr1, arr2), 145);
            
            let arr3 = [{ part: "blowoff valve", price: 145}, { part: "coil springs", price: 230 }, { part: "some book", price: 30 }];
            let arr4 = ["blowoff valve", "injectors", "some book"];
            assert.equal(carService.partsToBuy(arr3, arr4), 175);
            
            let arr5 = [];
            let arr6 = ["blowoff valve", "injectors", "some book"];
            assert.equal(carService.partsToBuy(arr5, arr6), 0);
        });

    });

});