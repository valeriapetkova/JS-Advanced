const lottery = require('./examTask');
const { assert } = require('chai');

describe('lottery object tests', () => {
    describe('buyLotteryTicket function tests', () => {
        it('should return invalid input', () => {
            assert.throws(() => lottery.buyLotteryTicket(-5, 3, true), 'Invalid input!');
            assert.throws(() => lottery.buyLotteryTicket(0, 3, true), 'Invalid input!');
            assert.throws(() => lottery.buyLotteryTicket(7, -3, true), 'Invalid input!');
            assert.throws(() => lottery.buyLotteryTicket('str', '1', true), 'Invalid input!');
            assert.throws(() => lottery.buyLotteryTicket('str', '1', 20), 'Invalid input!');
            assert.throws(() => lottery.buyLotteryTicket(6, 1, 20), 'Invalid input!');
        });
        it('should return unable to buy', () => {
            assert.throws(() => lottery.buyLotteryTicket(2, 4, false), 'Unable to buy lottery ticket!');
        });
        it('should return the correct answer', () => {
            assert.equal(lottery.buyLotteryTicket(2, 4, true), 'You bought 4 tickets for 8$.');
            assert.equal(lottery.buyLotteryTicket(3, 1, true), 'You bought 1 tickets for 3$.');
        });
    });
    describe('checkTicket function tests', () => {
        it('should return invalid input', () => {
            assert.throws(() => lottery.checkTicket(['1', '2', '3', '4', '5', '6'], 20), 'Invalid input!');
            assert.throws(() => lottery.checkTicket('str', ['1', '2', '3', '4', '5', '6']), 'Invalid input!');
            assert.throws(() => lottery.checkTicket(['1', '2', '3'], ['1', '2', '3', '4', '5', '6']), 'Invalid input!');
            assert.throws(() => lottery.checkTicket(['1', '2', '3', '4', '5', '6', '7'], ['1', '2', '3', '4', '5', '6']), 'Invalid input!');
        });
        it('should return the correct answer', () => {
            let arr1 = ['1', '2', '3', '4', '5', '6'];
            let arr2 = ['1', '2', '3', '8', '9', '10']
            assert.equal(lottery.checkTicket(arr1, arr2), 'Congratulations you win, check your reward!');
            let arr3 = ['1', '2', '3', '4', '5', '6'];
            let arr4 = ['1', '2', '3', '4', '4', '10']
            assert.equal(lottery.checkTicket(arr3, arr4), 'Congratulations you win, check your reward!');
            let arr5 = ['1', '2', '3', '4', '5', '6'];
            let arr6 = ['1', '2', '3', '4', '5', '6'];
            assert.equal(lottery.checkTicket(arr5, arr6), 'You win the JACKPOT!!!');
        });
    });
    describe('secondChance function tests', () => {
        it('should return invalid input', () => {
            assert.throws(() => lottery.secondChance(20, 'str'), 'Invalid input!');
            assert.throws(() => lottery.secondChance('str', ['1', '2', '3', '4', '5', '6']), 'Invalid input!');
            assert.throws(() => lottery.secondChance('str', 20), 'Invalid input!');
        });
        it('should return that you win second chance', () => {
           assert.equal(lottery.secondChance(1, [1, 2, 3]), 'You win our second chance prize!');
        });
        it('should return that you do not win', () => {
            assert.equal(lottery.secondChance(7, [1, 2, 3]), "Sorry, your ticket didn't win!");
         });
    });
});