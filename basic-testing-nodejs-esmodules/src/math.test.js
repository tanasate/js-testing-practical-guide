import { test, expect } from 'vitest'
import { add } from './math'

test('should summarize all number value in an array', () => {
    const result = add([1, 2, 3])
    expect(result).toBe(6)
})
