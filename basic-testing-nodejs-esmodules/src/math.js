export function add(numbers) {
  let sum = 0;

  try {
    for (const number of numbers) {
      sum += +number;
    }
  } catch (error) {
    throw error
  }

  return sum;
}
