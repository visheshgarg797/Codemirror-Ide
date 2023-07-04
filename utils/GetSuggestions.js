import Data from "./Data";
import { getTokensForText } from "@/components/Grammer/antrl4-lang";
import { ResearchAdvanceQLLexer } from "../components/antlrGenerated";
import {
  keywords,
  operators,
  advancedOperators,
  advancedOperatorsOptions,
} from "./DataSets";

const invalidTokens = new Set([
  ResearchAdvanceQLLexer.EOF,
  ResearchAdvanceQLLexer.LPAREN,
  ResearchAdvanceQLLexer.RPAREN,
]);
const useTokens = new Set([
  ResearchAdvanceQLLexer.PHRASE,
  ResearchAdvanceQLLexer.TERM_NORMAL,
  ResearchAdvanceQLLexer.AND,
  ResearchAdvanceQLLexer.NOT,
  ResearchAdvanceQLLexer.OR,
]);

const traverseBackCursor = (textInEditor) => {
  let recommendNewWord = false;
  let lastStr = "",
    secLastStr = "";
  if (!textInEditor) {
    return { lastStr: "", secLastStr: "" };
  }
  const tokens = getTokensForText(textInEditor).reduce((acc, token) => {
    if (!invalidTokens.has(token.type)) {
      return [...acc, token];
    }
    return acc;
  }, []);

  for (let i = tokens.length - 1; i >= 0; i--) {
    if (
      i === tokens.length - 1 &&
      (tokens[i].type === ResearchAdvanceQLLexer.WS ||
        tokens[i].type === ResearchAdvanceQLLexer.COLON)
    ) {
      recommendNewWord = true;
    }
    if (useTokens.has(tokens[i].type)) {
      if (lastStr === "") {
        lastStr = tokens[i].text;
      } else if (secLastStr === "") {
        secLastStr = tokens[i].text;
      }
    }
  }

  if (recommendNewWord) {
    return {
      wordBeforeCursor: "",
      secLastWordBeforeCursor: lastStr,
    };
  }
  return {
    wordBeforeCursor: lastStr,
    secLastWordBeforeCursor: secLastStr,
  };
};

const getKeywordFilter =
  ({ setSuggestions, showCustomSuggestionsPopup }) =>
  (context) => {
    const entireTextRegex = /.*/;

    const textInEditor = context.matchBefore(entireTextRegex).text;

    const pos = Math.max(
      context.pos - context?.state?.doc
        ? context.state.doc.length
        : 0 + textInEditor.length,
      textInEditor.length
    );

    const wordBeforeCursor =
      traverseBackCursor(textInEditor, pos).wordBeforeCursor || "";

    const secLastWordBeforeCursor =
      traverseBackCursor(textInEditor, pos).secLastWordBeforeCursor || "";

    let returnValue = null;

    // handle new line
    if (secLastWordBeforeCursor.length === 0 && wordBeforeCursor.length === 0) {
      if (!returnValue) {
        returnValue = {
          from: context.pos,
          options: [...Data.keywords.concat(Data.advancedOperators)],
        };
      }
    }

    // starting case
    if (secLastWordBeforeCursor.length === 0 && wordBeforeCursor.length > 0) {
      const possibleSuggestions = Data.keywords.concat(Data.advancedOperators);
      const filteredSuggesions = possibleSuggestions.filter((item) => {
        return item.label.startsWith(wordBeforeCursor);
      });
      if (!returnValue) {
        returnValue = {
          from: context.pos - wordBeforeCursor.length,
          options: filteredSuggesions,
        };
      }
    }

    // case after a word has been typed
    if (wordBeforeCursor.length === 0 && secLastWordBeforeCursor.length > 0) {
      if (operators.has(secLastWordBeforeCursor)) {
        if (!returnValue) {
          returnValue = {
            from: context.pos,
            options: Data.keywords.concat(Data.advancedOperators),
          };
        }
      }
      if (advancedOperators.has(secLastWordBeforeCursor)) {
        if (!returnValue) {
          returnValue = {
            from: context.pos,
            options: Data[secLastWordBeforeCursor],
          };
        }
      }
      if (
        advancedOperatorsOptions.has(
          secLastWordBeforeCursor.substring(
            1,
            secLastWordBeforeCursor.length - 1
          )
        )
      ) {
        if (!returnValue) {
          returnValue = {
            from: context.pos,
            options: Data.operators,
          };
        }
      }
      if (keywords.has(secLastWordBeforeCursor)) {
        if (!returnValue) {
          returnValue = {
            from: context.pos,
            options: Data.operators,
          };
        }
      }
    }

    // middle case
    if (wordBeforeCursor.length > 0 && secLastWordBeforeCursor.length > 0) {
      if (
        wordBeforeCursor[0] === '"' &&
        wordBeforeCursor[wordBeforeCursor.length - 1] === '"'
      ) {
        if (!returnValue) {
          returnValue = {
            from: context.pos,
            options: Data.operators,
          };
        }
      }
      if (
        advancedOperatorsOptions.has(
          secLastWordBeforeCursor.substring(
            1,
            secLastWordBeforeCursor.length - 1
          )
        )
      ) {
        const possibleSuggestions = Data.operators;
        const filteredSuggesions = possibleSuggestions.filter((item) => {
          return item.label.startsWith(wordBeforeCursor);
        });
        if (!returnValue) {
          returnValue = {
            from: context.pos - wordBeforeCursor.length,
            options: filteredSuggesions,
          };
        }
      }
      if (operators.has(secLastWordBeforeCursor)) {
        // give keywords and advanced operators
        const possibleSuggestions = Data.keywords.concat(
          Data.advancedOperators
        );
        const filteredSuggesions = possibleSuggestions.filter((item) => {
          return item.label.startsWith(wordBeforeCursor);
        });
        if (!returnValue) {
          returnValue = {
            from: context.pos - wordBeforeCursor.length,
            options: filteredSuggesions,
          };
        }
      }
      if (advancedOperators.has(secLastWordBeforeCursor)) {
        // give specific city or country
        const possibleSuggestions = Data[secLastWordBeforeCursor];
        const filteredSuggesions = possibleSuggestions.filter((item) => {
          return item.label.startsWith(wordBeforeCursor);
        });
        if (!returnValue) {
          returnValue = {
            from: context.pos - wordBeforeCursor.length,
            options: filteredSuggesions,
          };
        }
      }
      if (advancedOperatorsOptions.has(secLastWordBeforeCursor)) {
        // give operators
        const possibleSuggestions = Data.operators;
        const filteredSuggesions = possibleSuggestions.filter((item) => {
          return item.label.startsWith(wordBeforeCursor);
        });
        if (!returnValue) {
          returnValue = {
            from: context.pos - wordBeforeCursor.length,
            options: filteredSuggesions,
          };
        }
      }
      if (keywords.has(secLastWordBeforeCursor)) {
        // give operators
        const possibleSuggestions = Data.operators;
        const filteredSuggesions = possibleSuggestions.filter((item) => {
          return item.label.startsWith(wordBeforeCursor);
        });
        if (!returnValue) {
          returnValue = {
            from: context.pos - wordBeforeCursor.length,
            options: filteredSuggesions,
          };
        }
      }
    }

    // bracket case
    if (wordBeforeCursor === "") {
      if (!returnValue) {
        returnValue = {
          from: context.pos,
          options: [
            ...Data.keywords.concat(Data.advancedOperators),
            // {
            //   label: "not",
            //   type: "operatorNot",
            //   info: "not",
            //   apply: "not ",
            // },
          ],
        };
      }
    }

    if (showCustomSuggestionsPopup) {
      setSuggestions(returnValue);
    }
    return returnValue;
  };
export default getKeywordFilter;
