import antlr4 from "antlr4";

export default class ParseCancellationException extends Error {
  msg;

  offendingToken;

  constructor(recognizer, message, offendingToken) {
    super(message);

    this.msg = message;

    this.offendingToken = offendingToken;
  }

  setMessage(message) {
    this.msg = message;
  }

  setOffendingToken(offendingToken) {
    this.offendingToken = offendingToken;
  }

  getMessage() {
    return this.msg;
  }

  getOffendingToken() {
    return this.offendingToken;
  }
}
