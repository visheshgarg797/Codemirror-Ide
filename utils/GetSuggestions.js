import Data from "./Data";

// use the pos to traverse back till it comes at either pos = 0 or a opening bracket or closing bracket or a space whichever comes first
// this will return the string just before the cursor

const check = (char) => {
  if (
    char === "{" ||
    char === "}" ||
    char === "[" ||
    char === "]" ||
    char === "(" ||
    char === ")" ||
    char === ":" ||
    char === " "
  ) {
    return true;
  }
  return false;
};

const reverseString = (str) => {
  const strArr = str.split("");
  const len = strArr.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    const temp = strArr[i];
    strArr[i] = strArr[len - 1 - i];
    strArr[len - 1 - i] = temp;
  }
  return strArr.join("");
};

const traverseBackCursor = (TextInEditor, pos) => {
  if (!TextInEditor) {
    return { lastStr: undefined, secLastStr: undefined };
  }
  console.log("POS", pos);
  let secLastStr = "",
    lastStr = "",
    index = pos - 1;
  while (
    index >= 0 &&
    ((TextInEditor[index].charCodeAt(0) >= 65 &&
      TextInEditor[index].charCodeAt(0) <= 90) ||
      (TextInEditor[index].charCodeAt(0) >= 97 &&
        TextInEditor[index].charCodeAt(0) <= 122))
  ) {
    lastStr += TextInEditor[index];
    index -= 1;
  }
  lastStr = reverseString(lastStr);
  if (
    index >= 0 &&
    (TextInEditor[index] === ":" || TextInEditor[index] === " ")
  ) {
    index -= 1;
  }
  while (index >= 0) {
    if (check(TextInEditor[index])) {
      break;
    }
    secLastStr += TextInEditor[index];
    index -= 1;
  }
  secLastStr = reverseString(secLastStr);
  return {
    lastStr,
    secLastStr,
  };
};

const keywordFilter = (context) => {
  const EntireTextRegex = /.*/;

  // I am maintaining a global variable because when text enters a new line, it losses access to the previous text making the new context null which breaks the program.
  // We can try using different methods to maintain global variables if windows.prevText has any drawbacks.
  const TextInEditor = context.matchBefore(EntireTextRegex).text;
  console.log("TEXT IN EDITOR", TextInEditor);
  //   || window.prevText;
  // window.prevText = TextInEditor;

  const pos = Math.max(
    context.pos - window.totalEditorText
      ? window.totalEditorText.length
      : 0 + TextInEditor.length,
    TextInEditor.length
  );

  const wordBeforeCursor = traverseBackCursor(TextInEditor, pos).lastStr || "";

  const secLastWordBeforeCursor =
    traverseBackCursor(TextInEditor, pos).secLastStr || "";

  console.log(
    "wordBeforeCursor",
    wordBeforeCursor,
    "secLastWordBeforeCursor",
    secLastWordBeforeCursor
  );

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
      options: [
        ...Data.keywords.concat(Data.advancedOperators),
        {
          label: "not",
          type: "operatorNot",
          info: "not",
          apply: "not ",
        },
      ],
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
    if (advancedOperatorsOptions.has(secLastWordBeforeCursor)) {
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
      options: [
        ...Data.keywords.concat(Data.advancedOperators),
        {
          label: "not",
          type: "operatorNot",
          info: "not",
          apply: "not ",
        },
      ],
    };
  }
};
export default keywordFilter;
