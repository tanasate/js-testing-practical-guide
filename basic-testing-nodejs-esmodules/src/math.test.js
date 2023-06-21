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
