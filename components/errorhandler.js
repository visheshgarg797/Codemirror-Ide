import antlr4 from "antlr4";
import ParseCancellationException from "./ParseCancellationException";

class ResearchAdvanceQLErrorStrategy extends antlr4.error.BailErrorStrategy {
  reportUnwantedToken(recognizer) {
    throw new ParseCancellationException(
      recognizer,
      "error found 2n",
      recognizer.getCurrentToken()
    );
  }

  recoverInline(recognizer) {
    console.log("hann33");
  }

  reportError(recognizer, e) {
    //   if (e instanceof antrl4.error.NoViableAltException) {
    //     this.reportNoViableAlternative(recognizer, e);
    //   } else if (e instanceof antrl4.error.InputMismatchException) {
    //     this.reportInputMismatch(recognizer, e);
    //   } else if (e instanceof antrl4.error.FailedPredicateException) {
    //     this.reportFailedPredicate(recognizer, e);
    //   } else if (e instanceof MissingQuoteException) {
    //     this.reportMissingQuote(recognizer, e);
    //   } else {
    //     stopParsingAndNotifyListeners(
    //       recognizer,
    //       recognizer.getCurrentToken(),
    //       `unknown recognition error type: ${e.constructor.name}`,
    //       e
    //     );
    //   }

    // recognizer.notifyErrorListeners(
    //   "errorfound",
    //   recognizer.getCurrentToken(),
    //   e
    // );
    throw new ParseCancellationException(
      recognizer,
      "error found",
      recognizer.getCurrentToken()
    );
    console.log("yes4");
  }

  recover(recognizer, e) {
    //do nothing
  }
}
export default ResearchAdvanceQLErrorStrategy;
