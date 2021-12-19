export default class Calculate {

  historic = ""

  sum(number1, number2) {
    return Number(number1) + Number(number2);
  }
  subtract(number1, number2) {
    return Number(number1) - Number(number2);
  }
  division(number1, number2) {
    return Number(number1) / Number(number2);
  }
  multiply(number1, number2) {
    return Number(number1) * Number(number2);
  }
  percentage(number1, number2) {
    return (Number(number1) / 100) * Number(number2);
  }
  convertValue(number) {
    if (Object.is(+0, number)) return -0;
    if (Object.is(-0, number)) return 0;
    return Math.sign(Number(number)) ? -Math.abs(number) : Math.abs(number);
  }
  setHistoric(historic) {
    this.historic = historic;
  }
  getHistoric() {
    return this.historic;
  }
  clean() {
    this.historic = "";
  }

  operation(calc) {
    const newArrayCalc = calc.split(" ");
    let result = 0;
    let number = 0;
    for (let index = 0;index < newArrayCalc.length;index++) {
      let operation = newArrayCalc[index];
      if (!["+", "-", "x", "%", "/"].includes(operation)) {
        number = Number(operation);
      } else {
        let number1 = Number(index > 1 ? result : number);
        let number2 = Number(newArrayCalc[index + 1]);
        result = this._checkOperation(operation, number1, number2);
      }
    }
    this.setHistoric(calc);
    return result;
  }

  _checkOperation(operation, number1, number2) {
    if ("+" === operation) {
      return this.sum(number1, number2);
    }
    if ("-" === operation) {
      return this.subtract(number1, number2);
    }
    if ("/" === operation) {
      return this.division(number1, number2);
    }
    if ("x" === operation) {
      return this.multiply(number1, number2);
    }
    if ("%" === operation) {
      return this.percentage(number1, number2);
    }
  }

}
