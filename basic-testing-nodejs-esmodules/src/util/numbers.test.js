import { test, expect } from 'vitest'
import { transformToNumber } from './numbers'

test('should transform a string to number of type of number', () => {

    const input = '1'

    const result = transformToNumber(input)

    expect(result).toBe(1)
})

test('should yield NaN for non-transformable value', () => {

    const input = 'invalid'

    const result = transformToNumber(input)

    expect(result).toBeNaN()
})