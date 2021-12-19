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

  describe("Subtract(), perform the subtract", () => {
    it("should subtract 2 and 2 the result must be 0", () => {
      expect(calculator.subtract(2, 2)).toEqual(0);
    });
  });

  describe("Division(),  perform the division", () => {
    it("should division 2 and 2 the result must be 1", () => {
      expect(calculator.division(2, 2)).toEqual(1);
    });
  });

  describe("Multiply(), perform the multiply", () => {
    it("should multiply 2 and 2 the result must be 4", () => {
      expect(calculator.multiply(2, 2)).toEqual(4);
    });
  });

  describe("Percentage(), perform the percentage", () => {
    it("should return a percentage of 10 over 100 which should be 10", () => {
      expect(calculator.percentage(10, 100)).toEqual(10);
    });
  });

  describe("convertValue()", () => {
    it("must return the opposite value, that is, if it is positive, it must return negative, 100 must be -100", () => {
      expect(calculator.convertValue(-0)).toEqual(0);
    });
  });

  describe("setHistoric()", () => {
    it("should add value in historic", () => {
      calculator.setHistoric("3 + 2 = 5");
      expect(calculator.getHistoric()).toEqual("3 + 2 = 5");
    });
  });

  describe("getHistoric()", () => {
    it("should return historic", () => {
      calculator.setHistoric("3 + 2 = 5");
      expect(calculator.getHistoric()).toEqual("3 + 2 = 5");
    });
  });

  describe("clean()", () => {
    it("should clean historic", () => {
      calculator.clean();
      expect(calculator.getHistoric()).toEqual("");
    });
  });
  describe("operation(), will receive the transaction to carry out the transactions", () => {
    it("operation() must allocate operations, test methods sum() should return sum 2 and 2 to be 4", () => {
      expect(calculator.operation("2 + 2")).toEqual(4);
      expect(calculator.getHistoric()).toEqual("2 + 2");

    });
    it("operation() must allocate operations, test methods subtract() should return subtract 2 and 2 to be 0", () => {
      expect(calculator.operation("2 - 2")).toEqual(0);
      expect(calculator.getHistoric()).toEqual("2 - 2");

    });
    it("operation() must allocate operations, test methods division() should return division 2 and 2 to be 1", () => {
      expect(calculator.operation("2 / 2")).toEqual(1);
      expect(calculator.getHistoric()).toEqual("2 / 2");

    });
    it("operation() must allocate operations, test methods multiply() should return multiply 2 and 2 to be 4", () => {
      expect(calculator.operation("2 x 2")).toEqual(4);
      expect(calculator.getHistoric()).toEqual("2 x 2");
    });
    it("operation() must allocate operations, test methods Percentage() should return percentage 10 and 100 to be 10",
      () => {
        expect(calculator.operation("10 % 100")).toEqual(10);
        expect(calculator.getHistoric()).toEqual("10 % 100");
      });
  });
});