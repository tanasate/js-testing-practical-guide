import { test, expect } from 'vitest'
import { add } from './math'

test('should summarize all number value in an array', () => {

    // Arrange
    const numbers = [1, 2, 3]

    // Act
    const result = add(numbers)

    // Assert
    expect(result).toBe(6)

})

test('should yeild NaN if a least one invalid number of providered', () => {

    const inputs = ['invalid value', 1]

    const result = add(inputs)

    expect(result).toBeNaN()
})

test('should yeild a correct sum if an array of numeric string values is provided', () => {

    const numbers = ['1', '2']

    const result = add(numbers)

    expect(result).toBe(3)
})
