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

}