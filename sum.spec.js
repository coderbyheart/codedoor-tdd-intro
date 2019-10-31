const { sum } = require('./sum')

describe('sum', () => {
    it('should sum 1 and 2', () => {
        expect(sum(1, 2)).toEqual(3)
    })
    it('should sum 3 and 1', () => {
        expect(sum(3, 1)).toEqual(4)
    })
})
