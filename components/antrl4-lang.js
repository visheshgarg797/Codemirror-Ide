import antlr from "antlr4";
// import { CharStreams, CommonTokenStream, CommonToken } from "antlr4ts";
import { styleTags, tags, Tag } from "@lezer/highlight";
import { StreamLanguage /* HighlightStyle,*/ } from "@codemirror/language";
// import { tags } from "@lezer/highlight";
// import { ResearchAdvanceQLLexer } from "./antrl4-lang-grammar/ResearchAdvanceQLLexer";
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

// const myHighlightStyle = HighlightStyle.define([
//   { tag: tags.keyword, color: "#fc6" },
//   { tag: tags.comment, color: "#f5d", fontStyle: "italic" }
// ]);

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
        case ResearchAdvanceQLLexer.TERM_NORMAL:
          valueClass = getStyleNameByTag(tags.string);
          break;
        case ResearchAdvanceQLLexer.NUMBER:
          valueClass = getStyleNameByTag(tags.number);
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
