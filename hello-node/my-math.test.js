const { expect } = require("@jest/globals")
const { sum } = require("./my-math")

test('sum works', () => {
  expect(sum(1, 2)).toEqual(3);
});
