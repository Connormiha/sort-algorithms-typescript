import {expect} from 'chai';

import bubble from '../src/bubble';

const tests = {
    bubble
};

Object.keys(tests).forEach((item)=> {
    describe(`Sort ${item}`, ()=> {
        const sort = tests[item];

        it('Should sort long array', ()=> {
            let arr = [1, 5, 9, 12, -10, 0, 15, 20, 100, 4];
            let arrCorrect = [-10, 0, 1, 4, 5, 9, 12, 15, 20, 100];

            expect(sort(arr)).to.eql(arrCorrect);
        });

        it('Should sort empty array', ()=> {
            expect(sort([])).to.eql([]);
        });

        it('Should sort one element array', ()=> {
            expect(sort([1])).to.eql([1]);
        });

        it('Should sort [2, 1] array', ()=> {
            expect(sort([2, 1])).to.eql([1, 2]);
        });

        it('Should sort [1, 0, 0, 0]', ()=> {
            expect(sort([1, 0, 0, 0])).to.eql([0, 0, 0, 1]);
        });

        it('Should sort [1, 0, 0, 1]', ()=> {
            expect(sort([1, 0, 0, 1])).to.eql([0, 0, 1, 1]);
        });

        it('Should sort [0, 0, 0, 1]', ()=> {
            expect(sort([0, 0, 0, 1])).to.eql([0, 0, 0, 1]);
        });

        it('Should sort [0, 0, 0, 0]', ()=> {
            expect(sort([0, 0, 0, 0])).to.eql([0, 0, 0, 0]);
        });

        it('Should sort [0, 3, 0]', ()=> {
            expect(sort([0, 3, 0])).to.eql([0, 0, 3]);
        });
    });
})
