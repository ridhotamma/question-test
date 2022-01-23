const fishBash = require('./question1')
const sortArray = require('./question2')
const palyndrome = require('./question3')

describe('01 fishback function check', () => {
    test('check the fishbash function should return valid output', () => {
        const output = [
            'fish bash', '1',    '2',
            'fish',      '4',    'bash',
            'fish',      '7',    '8',
            'fish',      'bash', '11',
            'fish',      '13',   '14',
            'fish bash', '16',   '17',
            'fish',      '19',   'bash'
          ]
        expect(fishBash(20)).toEqual(output)
    })

    test('check fishbash function it should return empty array when undefined', () => {
        expect(fishBash()).toEqual([])
        expect(fishBash()).toEqual([])
    })
    
})

describe('02 sorted array check', () => {

    test('check the sorted array it should return correct order', () => {
        expect(sortArray([23, 10, 32, 9])).toEqual([9, 10, 23, 32])
    })
    
    test('check the sorted array it should return empty when value is null on undefined', () => {
        expect(sortArray(null)).toEqual([])
        expect(sortArray(undefined)).toEqual([])
        expect(sortArray()).toEqual([])
        expect(sortArray([])).toEqual([])
    })
})

describe('03 palyndrome check', () => {
    test('check the palyndrome it should return false when value is incorrect', () => {
        expect(palyndrome('mobil')).toEqual(false)
    })
    
    
    test('check the palyndrome it should return true when value is correct', () => {
        expect(palyndrome('kasur ini rusak')).toEqual(true)
    })
    
    test('check the palyndrome should throw an error when it\'s empty', () => {
        expect.assertions(2)
        try {
            palyndrome();
        } catch (e) {
            expect(e).toBeInstanceOf(TypeError)
            expect(e).toHaveProperty('message', 'invalid type of value or undefined')
        }
    })
})
