export const ERROR_MESSAGES = {
  require: "Поле должно быть заполнено",
  wrongCode: "wrong code",
  invalidEmail: "Invalid email address",
  agreement: "Вы должны согласиться на обработку личной информации",
  incompleteCard: "Incomplete card number",
  incompleteCVV: "Incomplete cvv",
  incorrectData: "Incorrect date",
  unavailableCity: "Unavailable city",
  getMaxSymbolMessage(symbols) {
    return `Value more than ${symbols} symbols`;
  },
};
