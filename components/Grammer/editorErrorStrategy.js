import antrl4 from "antlr4";
import { ResearchAdvanceQLParser } from "../antlrGenerated/index.ts";
import ParseCancellationException from "./ParseCancellationException";

class EditorErrorStrategy extends antrl4.error.BailErrorStrategy {
  reportMissingValueInAtom(recognizer, e) {
    if (
      recognizer._ctx instanceof ResearchAdvanceQLParser.AtomContext &&
      recognizer.getCurrentToken().type === ResearchAdvanceQLParser.TERM_NORMAL
    ) {
      let offendingToken = e.offendingToken;

      if (recognizer.getInputStream().LT(2) !== null) {
        offendingToken = recognizer.getInputStream().LT(2);
      }

      throw new ParseCancellationException(
        recognizer,
        "expecting some value after advance operator{city, country , author , fruit} ",
        offendingToken
      );
    }
  }
  reportNoViableAlternative(recognizer, e) {
    const tokens = recognizer.getInputStream();
    let msg;
    const offendingToken = e.offendingToken;
    if (tokens != null) {
      if (e.startToken.type === ResearchAdvanceQLParser.EOF) {
        msg = "no viable alternative at input <EOF>";
      } else {
        this.reportMissingValueInAtom(recognizer, e);
        if (e.startToken.type === ResearchAdvanceQLParser.WS) {
          if (
            (recognizer.getInputStream().LT(-1)?.type ===
              ResearchAdvanceQLParser.OR) |
            (recognizer.getInputStream().LT(-1)?.type ===
              ResearchAdvanceQLParser.AND) |
            (recognizer.getInputStream().LT(-1)?.type ===
              ResearchAdvanceQLParser.NOT)
          ) {
            if (e.offendingToken.type === ResearchAdvanceQLParser.DQUOTE) {
              msg = `add a valid phrase {"text"}`;
            } else {
              msg = `add a keyword {apple , sprinklr , city, country} or '('  after each operator {AND , OR , NOT})`;
            }
          } else {
            for (let token in tokens.tokens) {
              if (
                tokens.tokens[token].type !== 20 &&
                tokens.tokens[token].type !== -1
              ) {
                msg = `expecting operator {AND , OR  , NOT}`;
                throw new ParseCancellationException(
                  recognizer,
                  msg,
                  offendingToken
                );
              }
            }
            msg = `add some keyword to start the query`;
          }
        } else {
          msg = `no viable alternative at input ${this.escapeWSAndQuote(
            tokens.getText(e.startToken, e.offendingToken)
          )}`;
        }
      }
    } else {
      msg = "no viable alternative at input <unknown input>";
    }
    throw new ParseCancellationException(recognizer, msg, offendingToken);
  }

  reportFailedPredicate(recognizer, e) {
    const ruleName = recognizer.ruleNames[recognizer._ctx.ruleIndex];
    const msg = `rule ${ruleName} ${e.getMessage()}`;
    throw new ParseCancellationException(
      recognizer,
      msg,
      recognizer.getCurrentToken()
    );
  }

  validatePreviousToken(recognizer) {
    return;
  }

  validateNextToken(recognizer) {
    return;
  }

  reportUnwantedToken(recognizer) {
    this.beginErrorCondition(recognizer);
    const t = recognizer.getCurrentToken();
    const tokenName = this.getTokenErrorDisplay(t);
    const expecting = this.getExpectedTokens(recognizer);

    let msg;
    if (t.type === ResearchAdvanceQLParser.TERM_NORMAL) {
      msg = `extraneous input ${tokenName}  expecting  ${expecting.toString(
        recognizer.literalNames,
        recognizer.symbolicNames
      )} or operator{AND , OR  , NOT} before ${tokenName}`;
    } else if (
      t.type === ResearchAdvanceQLParser.OR ||
      t.type === ResearchAdvanceQLParser.AND ||
      t.type === ResearchAdvanceQLParser.NOT
    ) {
      msg = `extraneous input ${tokenName}  expecting  keyword/advance_operator after ${tokenName}`;
    } else if (
      recognizer.getInputStream().LT(-1).type ===
        ResearchAdvanceQLParser.LINE_COMMENT ||
      recognizer.getInputStream().LT(-1).type ===
        ResearchAdvanceQLParser.MULTI_LINE_COMMENT ||
      recognizer.getInputStream().LT(-1).type ===
        ResearchAdvanceQLParser.PHRASE_COMMENT
    ) {
      msg = `add a query , there is only a comment`;
    } else {
      msg = `This input cannot be ${tokenName}  expecting keyword , phrase or closing bracket or whitespace `;
    }
    throw new ParseCancellationException(
      recognizer,
      msg,
      recognizer.getCurrentToken()
    );
  }

  reportMissingToken(recognizer) {
    this.beginErrorCondition(recognizer);
    const t = recognizer.getCurrentToken();
    const expecting = this.getExpectedTokens(recognizer);
    let msg = `missing ${expecting.toString(
      recognizer.literalNames,
      recognizer.symbolicNames
    )} at ${this.getTokenErrorDisplay(t)}`;
    msg = this.modifyErrorMessageIfRequired(recognizer, expecting, msg);
    throw new ParseCancellationException(
      recognizer,
      msg,
      recognizer.getCurrentToken()
    );
  }

  singleTokenInsertion(recognizer) {
    const currentSymbolType = recognizer.getInputStream().LA(1);
    const currentState = recognizer._interp.atn.states[recognizer.state];
    const next = currentState.transitions[0].target;
    const atn = recognizer._interp.atn;
    const expectingAtLL2 = atn.nextTokens(next, recognizer._ctx);
    if (expectingAtLL2.contains(currentSymbolType)) {
      this.reportMissingToken(recognizer);
      return true;
    }
    return false;
  }

  singleTokenDeletion(recognizer) {
    const nextTokenType = recognizer.getInputStream().LA(2);
    const expecting = recognizer.getExpectedTokens(recognizer);
    if (expecting.contains(nextTokenType)) {
      this.reportUnwantedToken(recognizer);
      return recognizer.getCurrentToken();
    }
    return null;
  }

  reportInputMismatch(recognizer, e) {
    let msg;
    if (
      e.offendingToken.type === ResearchAdvanceQLParser.OR ||
      e.offendingToken.type === ResearchAdvanceQLParser.AND ||
      e.offendingToken.type === ResearchAdvanceQLParser.NOT
    ) {
      msg = `mismatched input ${this.getTokenErrorDisplay(
        e.offendingToken
      )} expecting keyword after ${this.getTokenErrorDisplay(
        e.offendingToken
      )}`;
      throw new ParseCancellationException(recognizer, msg, e.offendingToken);
    } else if (recognizer.getInputStream().tokens.length > 1) {
      if (
        recognizer.getInputStream().LT(-1).type ===
          ResearchAdvanceQLParser.OR ||
        recognizer.getInputStream().LT(-1).type ===
          ResearchAdvanceQLParser.AND ||
        recognizer.getInputStream().LT(-1).type === ResearchAdvanceQLParser.NOT
      ) {
        msg = `mismatched input ${
          recognizer.getInputStream().LT(-1).text
        } expecting keyword as ${this.getTokenErrorDisplay(e.offendingToken)}`;
      } else {
        if (e.offendingToken.type === ResearchAdvanceQLParser.RPAREN) {
          msg = `mismatched input write a valid query inside parenthes `;
        } else if (
          recognizer.getInputStream().LT(-1).type ===
            ResearchAdvanceQLParser.LINE_COMMENT ||
          recognizer.getInputStream().LT(-1).type ===
            ResearchAdvanceQLParser.PHRASE_COMMENT ||
          recognizer.getInputStream().LT(-1).type ===
            ResearchAdvanceQLParser.MULTI_LINE_COMMENT
        ) {
          msg = `no query only comment`;
        } else {
          msg = `mismatch input need to add ')' `;
        }
      }
      throw new ParseCancellationException(recognizer, msg, e.offendingToken);
    }
  }

  sync(recognizer) {
    if (recognizer.getInputStream().index === 0) {
      return;
    }
    const s = recognizer._interp.atn.states[recognizer.state];
    const tokens = recognizer.getInputStream();
    const la = tokens.LA(1);
    const nextTokens = recognizer.atn.nextTokens(s);
    if (nextTokens.contains(la)) {
      this.nextTokensContext = null;
      this.nextTokensState = -1;
    } else if (nextTokens.contains(-2)) {
      if (this.nextTokensContext === null) {
        this.nextTokensContext = recognizer._ctx;
        this.nextTokensState = recognizer.state;
      }
    } else {
      switch (s.stateType) {
        case 3:
        case 4:
        case 5:
        case 10:
          if (this.singleTokenDeletion(recognizer) !== null) {
            return;
          }
          this.validatePreviousToken(recognizer);
          this.validateNextToken(recognizer);
          if (recognizer.getInputStream().LT(1).type !== -1) {
            throw new ParseCancellationException(
              recognizer,
              "invalid parenthes",
              recognizer.getInputStream().LT(1)
            );
          }
        case 9:
        case 11:
          this.reportUnwantedToken(recognizer);
          break;
        case 6:
        case 7:
        case 8:
        default:
      }
    }
  }

  recover(recognizer, e) {
    //do nothing
  }

  recoverInline(recognizer) {
    const matchedSymbol = this.singleTokenDeletion(recognizer);
    if (matchedSymbol != null) {
      return matchedSymbol;
    }
    let e;
    if (this.nextTokensContext == null) {
      e = new antrl4.error.InputMismatchException(recognizer);
    } else {
      e = new antrl4.error.InputMismatchException(
        recognizer,
        this.nextTokensState,
        this.nextTokensContext
      );
    }
    this.reportInputMismatch(recognizer, e);
    return null;
  }
  reportInvalidAdvanceOperator(recognizer, start, end) {
    let offendingToken = recognizer.getCurrentToken();
    offendingToken.start = start;
    offendingToken.stop = end;
    throw new ParseCancellationException(
      recognizer,
      `unknown operator '${offendingToken.text}' use correct operator before colon {city: , country:}`,
      offendingToken
    );
  }
  reportError(recognizer, e) {
    console.log(recognizer.getInputStream().tokens);
    if (recognizer.getInputStream().tokens.length === 1) {
      return;
    }
    if (e instanceof antrl4.error.NoViableAltException) {
      this.reportNoViableAlternative(recognizer, e);
    } else if (e instanceof antrl4.error.InputMismatchException) {
      this.reportInputMismatch(recognizer, e);
    } else if (e instanceof antrl4.error.FailedPredicateException) {
      this.reportFailedPredicate(recognizer, e);
    } else {
      console.log("error");
      throw new ParseCancellationException(
        recognizer,
        `unknown recognition error type: ${e.constructor.name}`,
        recognizer.getCurrentToken()
      );
    }
  }
}

export default EditorErrorStrategy;
