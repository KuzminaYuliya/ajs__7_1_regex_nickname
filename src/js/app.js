
export default class Validator {
  static validateUsername(data) {
    const reg1 = /[-\w]/.test(data); /* общий шаблон */
    const regBegin = /^[^-_\d]/.test(data); /* шаблон для начала */
    const regEnd = /[^-_\d]$/.test(data); /* шаблон для конца */
    const reg2 = !/\d{4}/.test(data); /* шаблон для последовательно идущих цифр */
    const regMain = regBegin && reg1 && reg2 && regEnd;
    return regMain;
  }
}
