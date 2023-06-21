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

test('should yeild 0 if an empty array is provided', () => {

    const numbers = []

    const result = add(numbers)

    expect(result).toBe(0)

})

test('should throw an error if no value is passed into the function', () => {

    /* example for expect not
        //*    expect(error).not.toBeDefined()
    */

    // Normally
    try {
        const result = add()
    } catch (error) {
        expect(error).toBeDefined()
    }

    // Tip
    const resultFn = () => {
        add()
    }

    expect(resultFn).toThrow()

})
