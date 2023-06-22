import antlr from "antlr4";
import { styleTags, tags, Tag } from "@lezer/highlight";
import { StreamLanguage /* HighlightStyle,*/ } from "@codemirror/language";

import { ResearchAdvanceQLLexer } from "./antlrGenerated";
function getStyleNameByTag(tag) {
  for (let t in tags) {
    if (tags[t] === tag) {
      return t;
    }
  }

  return "";
}
function getTokenNameByTokenValue(tokenValue) {
  // const lexer = ResearchAdvanceQLLexer;
  const lexer = ResearchAdvanceQLLexer;
  for (let tokenName in lexer) {
    if (lexer[tokenName] === tokenValue) {
      return tokenName;
    }
  }

  return "";
}

function getTokens(tokens) {
  return tokens.map((token) => {
    return {
      tokenName: getTokenNameByTokenValue(token.type),
      text: token.text || "",
      type: token.type,
      startIndex: token.start,
      stopIndex: token.stop,
    };
  });
}

export function getTokensForText(text) {
  var chars = antlr.CharStreams.fromString(text);
  var lexer = new ResearchAdvanceQLLexer(chars);
  var tokensStream = new antlr.CommonTokenStream(lexer);
  tokensStream.fill();
  return getTokens(tokensStream.tokens);
}

export const antrl4Lang = StreamLanguage.define({
  token: (stream, state) => {
    const tokens = getTokensForText(stream.string);

    const nextToken = tokens.filter((t) => t.startIndex >= stream.pos)[0];
    // we iterate over the stream and match the token text to advance the stream
    // returning the token type that is used for the styling
    if (
      nextToken.type !== ResearchAdvanceQLLexer.EOF &&
      stream.match(nextToken.text)
    ) {
      let valueClass = getStyleNameByTag(tags.keyword);

      switch (nextToken.type) {
        case ResearchAdvanceQLLexer.COLON:
          valueClass = getStyleNameByTag(tags.className);
          break;
        case ResearchAdvanceQLLexer.PHRASE:
          valueClass = getStyleNameByTag(tags.content);
          break;
        case ResearchAdvanceQLLexer.NUMBER:
          valueClass = getStyleNameByTag(tags.number);
          break;
        case ResearchAdvanceQLLexer.OR:
          valueClass = getStyleNameByTag(tags.logicOperator);
          break;
        case ResearchAdvanceQLLexer.AND:
          valueClass = getStyleNameByTag(tags.arithmeticOperator);
          break;
        case ResearchAdvanceQLLexer.NOT:
          valueClass = getStyleNameByTag(tags.bitwiseOperator);
          break;
        default:
          valueClass = "keyword";
          break;
      }

      return valueClass;
    } else {
      stream.next();
      return null;
    }
  },
  tokenTable: {
    // Identifier: tags.keyword,
    // Boolean: tags.bool,
    // String: tags.string,
    // LineComment: tags.lineComment,
  },
});
