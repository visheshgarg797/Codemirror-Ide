import Data from "./Data";
import { getTokensForText } from "@/components/antrl4-lang";

const INVALID_TOKENS = new Set(["EOF", "LPAREN", "RPAREN"]);
const USE_TOKENS = new Set(["PHRASE", "TERM_NORMAL", "AND", "OR", "NOT"]);

const traverseBackCursor = (TextInEditor) => {
  let recommendNewWord = false;
  let lastStr = "",
    secLastStr = "";
  if (!TextInEditor) {
    return { lastStr: "", secLastStr: "" };
  }
  const tokens = getTokensForText(TextInEditor).reduce((acc, token) => {
    if (!INVALID_TOKENS.has(token.tokenName)) {
      return [...acc, token];
    }
    return acc;
  }, []);

  for (let i = tokens.length - 1; i >= 0; i--) {
    if (
      i === tokens.length - 1 &&
      (tokens[i].tokenName === "WS" || tokens[i].tokenName === "COLON")
    ) {
      recommendNewWord = true;
    }
    if (USE_TOKENS.has(tokens[i].tokenName)) {
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

const keywordFilter = (context) => {
  const EntireTextRegex = /.*/;

  const TextInEditor = context.matchBefore(EntireTextRegex).text;

  const pos = Math.max(
    context.pos - window.totalEditorText
      ? window.totalEditorText.length
      : 0 + TextInEditor.length,
    TextInEditor.length
  );

  const wordBeforeCursor =
    traverseBackCursor(TextInEditor, pos).wordBeforeCursor || "";

  const secLastWordBeforeCursor =
    traverseBackCursor(TextInEditor, pos).secLastWordBeforeCursor || "";

  const Keywords = new Set();
  const Operators = new Set();
  const advancedOperators = new Set();
  const advancedOperatorsOptions = new Set();

  Data.keywords.forEach((item) => {
    Keywords.add(item.label);
  });

  Data.operators.forEach((item) => {
    Operators.add(item.label);
  });

  Data.city.forEach((items) => {
    advancedOperatorsOptions.add(items.label);
  });
  Data.country.forEach((item) => {
    advancedOperatorsOptions.add(item.label);
  });

  Data.advancedOperators.forEach((item) => {
    advancedOperators.add(item.label);
  });

  // handle new line
  if (secLastWordBeforeCursor.length === 0 && wordBeforeCursor.length === 0) {
    return {
      from: context.pos,
      options: [...Data.keywords.concat(Data.advancedOperators)],
    };
  }

  // starting case
  if (secLastWordBeforeCursor.length === 0 && wordBeforeCursor.length > 0) {
    const possibleSuggestions = Data.keywords.concat(Data.advancedOperators);
    const filteredSuggesions = possibleSuggestions.filter((item) => {
      return item.label.startsWith(wordBeforeCursor);
    });
    return {
      from: context.pos - wordBeforeCursor.length,
      options: filteredSuggesions,
    };
  }

  // case after a word has been typed
  if (wordBeforeCursor.length === 0 && secLastWordBeforeCursor.length > 0) {
    if (Operators.has(secLastWordBeforeCursor)) {
      return {
        from: context.pos,
        options: Data.keywords.concat(Data.advancedOperators),
      };
    }
    if (advancedOperators.has(secLastWordBeforeCursor)) {
      return {
        from: context.pos,
        options: Data[secLastWordBeforeCursor],
      };
    }
    if (
      advancedOperatorsOptions.has(
        secLastWordBeforeCursor.substring(1, secLastWordBeforeCursor.length - 1)
      )
    ) {
      return {
        from: context.pos,
        options: Data.operators,
      };
    }
    if (Keywords.has(secLastWordBeforeCursor)) {
      return {
        from: context.pos,
        options: Data.operators,
      };
    }
  }

  // middle case
  if (wordBeforeCursor.length > 0 && secLastWordBeforeCursor.length > 0) {
    if (
      wordBeforeCursor[0] === '"' &&
      wordBeforeCursor[wordBeforeCursor.length - 1] === '"'
    ) {
      return {
        from: context.pos,
        options: Data.operators,
      };
    }
    if (
      advancedOperatorsOptions.has(
        secLastWordBeforeCursor.substring(1, secLastWordBeforeCursor.length - 1)
      )
    ) {
      const possibleSuggestions = Data.operators;
      const filteredSuggesions = possibleSuggestions.filter((item) => {
        return item.label.startsWith(wordBeforeCursor);
      });
      return {
        from: context.pos - wordBeforeCursor.length,
        options: filteredSuggesions,
      };
    }
    if (Operators.has(secLastWordBeforeCursor)) {
      // give keywords and advanced operators
      const possibleSuggestions = Data.keywords.concat(Data.advancedOperators);
      const filteredSuggesions = possibleSuggestions.filter((item) => {
        return item.label.startsWith(wordBeforeCursor);
      });
      return {
        from: context.pos - wordBeforeCursor.length,
        options: filteredSuggesions,
      };
    }
    if (advancedOperators.has(secLastWordBeforeCursor)) {
      // give specific city or country
      const possibleSuggestions = Data[secLastWordBeforeCursor];
      const filteredSuggesions = possibleSuggestions.filter((item) => {
        return item.label.startsWith(wordBeforeCursor);
      });
      return {
        from: context.pos - wordBeforeCursor.length,
        options: filteredSuggesions,
      };
    }
    if (advancedOperatorsOptions.has(secLastWordBeforeCursor)) {
      // give operators
      const possibleSuggestions = Data.operators;
      const filteredSuggesions = possibleSuggestions.filter((item) => {
        return item.label.startsWith(wordBeforeCursor);
      });
      return {
        from: context.pos - wordBeforeCursor.length,
        options: filteredSuggesions,
      };
    }
    if (Keywords.has(secLastWordBeforeCursor)) {
      // give operators
      const possibleSuggestions = Data.operators;
      const filteredSuggesions = possibleSuggestions.filter((item) => {
        return item.label.startsWith(wordBeforeCursor);
      });
      return {
        from: context.pos - wordBeforeCursor.length,
        options: filteredSuggesions,
      };
    }
  }

  // bracket case
  if (wordBeforeCursor === "") {
    return {
      from: context.pos,
      options: [...Data.keywords.concat(Data.advancedOperators), ,],
    };
  }
};
export default keywordFilter;
