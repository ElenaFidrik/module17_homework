import {sum} from '../../utils/sum.js';

xdescribe("sum", () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    }); 
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(3, 2)).toBe(5);
    }); 
})
