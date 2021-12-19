import Calculate from "../assets/js/calculate";

/* eslint-disable no-undef */
describe("Calculator", () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculate();
  });
  describe("Sum(), perform the sum", () => {
    it("should sum 2 and 2 the result must be 4", () => {
      expect(calculator.sum(2, 2)).toEqual(4);
    });
  });
});