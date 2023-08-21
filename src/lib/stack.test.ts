import 'jest';
import {Stack} from './stack';

describe('Test stack', () => {
    it('check size stack', () => {
        expect(new Stack([1, 2, 3])).toHaveLength(3);
        expect(new Stack([1, 2]).pop()).toBe(2);
    });
});
