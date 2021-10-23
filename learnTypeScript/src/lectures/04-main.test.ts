import { isPositive } from './04-main';

describe('isPositive()', () => {
    it('Should return true when number > 0', () => {
        // Viết tắt etb
        expect(isPositive(10)).toBe(true);
        expect(isPositive(50)).toBe(true);
        expect(isPositive(100)).toBe(true);
    });
    it('Should return true when number = 0', () => {
        expect(isPositive(0)).toBe(true);
    });
    it('Should return false when number < 0', () => {
        expect(isPositive(-10)).toBe(false);
        expect(isPositive(-50)).toBe(false);
        expect(isPositive(-100)).toBe(false);
    });
})
